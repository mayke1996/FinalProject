import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CargaEditPage } from './carga-edit.page';

const routes: Routes = [
  {
    path: '',
    component: CargaEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CargaEditPageRoutingModule {}
