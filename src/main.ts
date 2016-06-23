import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { provideStore } from '@ngrx/store';
import { AppComponent, environment } from './app/';
import { favoriteBooks, searchBooks, selectedBook } from './app/reducers/index';

import { APP_ROUTER_PROVIDERS } from './app/routes';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  APP_ROUTER_PROVIDERS,
  provideStore({ favoriteBooks, searchBooks, selectedBook })
])
.catch(err => console.error(err));