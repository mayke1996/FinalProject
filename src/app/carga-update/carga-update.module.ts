import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CargaUpdatePageRoutingModule } from './carga-update-routing.module';

import { CargaUpdatePage } from './carga-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CargaUpdatePageRoutingModule,
    ReactiveFormsModule 
  ],
  declarations: [CargaUpdatePage]
})
export class CargaUpdatePageModule {}
