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

  // Create
  createCarga(carga: Carga) {
    return this.cargaListRef.push({
      nome: carga.nome,
      peso: carga.peso,
      tamanho: carga.tamanho
    })
  }

  // Get Single
  getCarga(id: string) {
    this.cargaRef = this.db.object('/carga/' + id);
    return this.cargaRef;
  }

  // Get List
  getCargaList() {
    this.cargaListRef = this.db.list('/carga');
    return this.cargaListRef;
  }

  // Update
  updateCarga(id, carga: Carga) {
    return this.cargaRef.update({
      name: carga.nome,
      email: carga.peso,
      mobile: carga.tamanho
    })
  }

  // Delete
  deleteCarga(id: string) {
    this.cargaRef = this.db.object('/carga/' + id);
    this.cargaRef.remove();
  }
}
