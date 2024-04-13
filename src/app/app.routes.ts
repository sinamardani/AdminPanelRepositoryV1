import { Routes } from '@angular/router';
import { OneColumnComponent } from './@theme/layouts/one-column/one-column.component';
import { PagesComponent } from './pages/pages.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'pages',
    pathMatch: 'full',
  },
  {
    path: 'pages',
    loadChildren: () =>
      import('./pages/pages.routes').then((m) => m.routes),
  },
];
