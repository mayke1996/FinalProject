import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CargaUpdatePage } from './carga-update.page';

const routes: Routes = [
  {
    path: '',
    component: CargaUpdatePage
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CargaUpdatePageRoutingModule {}
