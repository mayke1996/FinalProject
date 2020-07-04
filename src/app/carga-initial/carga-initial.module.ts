import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CargaInitialPageRoutingModule } from './carga-initial-routing.module';

import { CargaInitialPage } from './carga-initial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CargaInitialPageRoutingModule
  ],
  declarations: [CargaInitialPage]
})
export class CargaInitialPageModule {}
