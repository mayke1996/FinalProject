import { Injectable } from '@angular/core';
import { Carga } from '../shared/Carga';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class CargaService {

  cargaListRef: AngularFireList<any>;
  cargaRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }

  createCarga(carga: Carga) {
    return this.cargaListRef.push({
      nome: carga.nome,
      peso: carga.peso,
      tamanho: carga.tamanho
    })
  }

  getCarga(id: string) {
    this.cargaRef = this.db.object('/carga/' + id);
    return this.cargaRef;
  }

  getCargaList() {
    this.cargaListRef = this.db.list('/carga');
    return this.cargaListRef;
  }
  updateCarga(id, carga: Carga) {
    return this.cargaRef.update({
      nome: carga.nome,
      peso: carga.peso,
      tamanho: carga.tamanho
    })
  }

  deleteCarga(id: string) {
    this.cargaRef = this.db.object('/carga/' + id);
    this.cargaRef.remove();
  }
}
