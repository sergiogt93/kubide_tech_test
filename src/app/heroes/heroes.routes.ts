import { Routes } from '@angular/router';

export const heroRoutes: Routes = [
  {
    path: 'heroes',
    loadComponent: () => import('../heroes/components/hero-list/hero-list.component').then(m => m.HeroListComponent)
  },
  {
    path: 'heroes/:id',
    loadComponent: () => import('../heroes/components/hero-detail/hero-detail.component').then(m => m.HeroDetailComponent)
  },
];