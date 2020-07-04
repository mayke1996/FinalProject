import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { CargaService } from './../shared/carga.service';

@Component({
  selector: 'app-carga-update',
  templateUrl: './carga-update.page.html',
  styleUrls: ['./carga-update.page.scss'],
})
export class CargaUpdatePage implements OnInit {

  updateCargaForm: FormGroup;
  id: any;

  constructor(
    private cargaService: CargaService,
    private actRoute: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder
  ) {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.cargaService.getCarga(this.id).valueChanges().subscribe(res => {
      this.updateCargaForm.setValue(res);
    });
  }

  ngOnInit() {
    this.updateCargaForm = this.fb.group({
      nome: [''],
      peso: [''],
      tamanho: ['']
    })
    console.log(this.updateCargaForm.value)
  }

  updateForm() {
    this.cargaService.updateCarga(this.id, this.updateCargaForm.value)
      .then(() => {
        this.router.navigate(['/carga-initial']);
      })
      .catch(error => console.log(error));
  }

}
