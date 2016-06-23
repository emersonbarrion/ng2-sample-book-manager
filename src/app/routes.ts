import { provideRouter, RouterConfig } from '@angular/router';
import { SearchBookComponent } from './pages/search-book/search-book.component';
import { FavoriteBooksComponent } from './pages/favorite-books/favorite-books.component';
import { BookComponent } from './pages/book/book.component';

export const routes: RouterConfig = [
  { path: '/', component: SearchBookComponent, index: true },
  { path: 'favorites', component: FavoriteBooksComponent },
  { path: 'book/:id', component: BookComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];