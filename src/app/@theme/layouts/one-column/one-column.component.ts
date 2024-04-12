import { Component } from '@angular/core';
import {
  NbInputModule,
  NbLayoutModule,
  NbSidebarModule,
  NbSidebarService,
} from '@nebular/theme';
import { HeaderComponent } from '../../components/header/header.component';

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

      <nb-layout-column>
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>

      <nb-layout-footer fixed>
        <!-- <ngx-footer></ngx-footer> -->
      </nb-layout-footer>
    </nb-layout>
  `,
  styleUrl: './one-column.component.scss',
  imports: [NbLayoutModule, NbSidebarModule, NbInputModule, HeaderComponent],
})
export class OneColumnComponent {}
