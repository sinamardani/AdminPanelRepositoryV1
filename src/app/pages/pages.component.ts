import { Component } from '@angular/core';
import { OneColumnComponent } from '../@theme/layouts/one-column/one-column.component';
import { NbIconLibraries, NbMenuModule } from '@nebular/theme';
import { RouterOutlet } from '@angular/router';
import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'app-pages',
  standalone: true,
  imports: [OneColumnComponent, NbMenuModule, RouterOutlet],
  template: `
    <app-one-column>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </app-one-column>
  `,
  styleUrl: './pages.component.scss',
})
export class PagesComponent {
  menu = MENU_ITEMS;
  constructor(private iconLibraries: NbIconLibraries) {
    this.iconLibraries.registerFontPack('font-awesome', {
      iconClassPrefix: 'fa',
      packClass: 'fa-solid',
    });
  }
}
