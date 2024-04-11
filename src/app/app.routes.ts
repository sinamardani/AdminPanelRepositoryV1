import { Routes } from '@angular/router';
import { OneColumnComponent } from './@theme/layouts/one-column/one-column.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
  },
  {
    path: 'main',
    component: OneColumnComponent,
  },
];
