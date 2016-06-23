import { Book } from './models/book';

export interface AppState {
    favoriteBooks: Book[],
    searchBooks: Book[],
    selectedBook: Book
}