import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NbMenuModule, NbThemeModule } from '@nebular/theme';
import { NbRoleProvider, NbSecurityModule } from '@nebular/security';

import { of as observableOf } from 'rxjs';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    importProvidersFrom(
      NbThemeModule.forRoot(),
      NbSecurityModule.forRoot({
        accessControl: {
          guest: {
            view: '*',
          },
          user: {
            parent: 'guest',
            create: 'comments',
            edit: 'comments',
          },
          admin: {
            parent: 'user',
            create: '*',
            remove: '*',
            edit: '*',
          },
        },
      }),
      NbMenuModule.forRoot()
    ),
    {
      provide: NbRoleProvider,
      useValue: {
        getRole: () => {
          // here we simply return a list of roles for current user
          return observableOf('user');
        },
      },
    },
  ],
};
