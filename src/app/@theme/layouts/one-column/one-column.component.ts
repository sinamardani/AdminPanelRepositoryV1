import { Component } from '@angular/core';
import {
  NbInputModule,
  NbLayoutModule,
  NbMenuComponent,
  NbMenuModule,
  NbSidebarModule,
  NbSidebarService,
} from '@nebular/theme';
import { HeaderComponent } from '../../components/header/header.component';
import { MENU_ITEMS } from '../../../pages/pages-menu';
import { PagesComponent } from '../../../pages/pages.component';

@Component({
  selector: 'app-one-column',
  standalone: true,
  providers: [NbSidebarService],
  template: `
    <nb-layout windowMode>
      <nb-layout-header fixed>
        <app-header></app-header>
      </nb-layout-header>

      <nb-sidebar right class="menu-sidebar" tag="menu-sidebar" responsive>
        <ng-content select="nb-menu"></ng-content>
      </nb-sidebar>

      <nb-layout-column style="text-align: right;">
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>

      <nb-layout-footer fixed>
        <!-- <ngx-footer></ngx-footer> -->
      </nb-layout-footer>
    </nb-layout>
  `,
  styleUrl: './one-column.component.scss',
  imports: [
    NbLayoutModule,
    NbSidebarModule,
    NbInputModule,
    HeaderComponent,
    NbMenuModule,
    PagesComponent,
  ],
})
export class OneColumnComponent {}
