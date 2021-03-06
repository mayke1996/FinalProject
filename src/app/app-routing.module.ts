import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'carga-initial',
    pathMatch: 'full'
  },
  {
    path: 'carga-initial',
    loadChildren: () => import('./carga-initial/carga-initial.module').then( m => m.CargaInitialPageModule)
  },
  {
    path: 'carga-edit',
    loadChildren: () => import('./carga-edit/carga-edit.module').then( m => m.CargaEditPageModule)
  },
  {
    path: 'carga-update/:id',
    loadChildren: () => import('./carga-update/carga-update.module').then( m => m.CargaUpdatePageModule)
  },
  {
    path: 'movie',
    loadChildren: () => import('./movie/movie.module').then( m => m.MoviePageModule)
  },
  {
    path: 'movie-details/:id',
    loadChildren: () => import('./movie-details/movie-details.module').then( m => m.MovieDetailsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
