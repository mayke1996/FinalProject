import { Component, OnInit } from '@angular/core';
import { Carga } from '../shared/Carga';
import { CargaService } from './../shared/carga.service';

@Component({
  selector: 'app-carga-initial',
  templateUrl: './carga-initial.page.html',
  styleUrls: ['./carga-initial.page.scss'],
})
export class CargaInitialPage implements OnInit {

  Cargas = [];

  constructor(
    private cargaService: CargaService
  ) { }

  ngOnInit() {
    this.fetchCargas();
    let bookingRes = this.cargaService.getCargaList();
    bookingRes.snapshotChanges().subscribe(res => {
      this.Cargas = [];
      res.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.Cargas.push(a as Carga);
      })
    })
  }

  fetchCargas() {
    this.cargaService.getCargaList().valueChanges().subscribe(res => {
      console.log(res)
    })
  }

  deleteBooking(id) {
    console.log(id)
    if (window.confirm('Tem certeza que deseja deletar?')) {
      this.cargaService.deleteCarga(id)
    }
  }

}
