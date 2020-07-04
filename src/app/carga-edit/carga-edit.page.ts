import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { CargaService } from './../shared/carga.service';

@Component({
  selector: 'app-carga-edit',
  templateUrl: './carga-edit.page.html',
  styleUrls: ['./carga-edit.page.scss'],
})
export class CargaEditPage implements OnInit {
  cargaForm: FormGroup;
  constructor(
    private cargaService: CargaService,
    private router: Router,
    public fb: FormBuilder
  ) { }

  ngOnInit() {
    this.cargaForm = this.fb.group({
      nome: [''],
      peso: [''],
      tamanho: ['']
    })
  }

  formSubmit() {
    if (!this.cargaForm.valid) {
      return false;
    } else {
      this.cargaService.createCarga(this.cargaForm.value).then(res => {
        console.log(res)
        this.cargaForm.reset();
        this.router.navigate(['/carga-initial']);
      })
        .catch(error => console.log(error));
    }
  }

}
