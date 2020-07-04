import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CargaEditPageRoutingModule } from './carga-edit-routing.module';

import { CargaEditPage } from './carga-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CargaEditPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CargaEditPage]
})
export class CargaEditPageModule {}
