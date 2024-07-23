import { Routes } from '@angular/router';
import { heroRoutes } from './heroes/heroes.routes';

export const routes: Routes = [
  ...heroRoutes,
  {
    path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/heroes'
  }
];
