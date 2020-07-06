import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CargaInitialPage } from './carga-initial.page';

const routes: Routes = [
  {
    path: '',
    component: CargaInitialPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CargaInitialPageRoutingModule {}
