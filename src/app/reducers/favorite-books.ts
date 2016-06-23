import { Book } from '../models/book';

declare let _: any;

export const ADD_FAVORITE_BOOK = 'ADD_FAVORITE_BOOK';
export const REMOVE_FAVORITE_BOOK = 'REMOVE_FAVORITE_BOOK';

export const favoriteBooks = (state: any = [], { type, payload }) => {
    switch (type) {
        case ADD_FAVORITE_BOOK:
            console.log(payload);
            return addFavoriteBook(state, payload);
        case REMOVE_FAVORITE_BOOK:
            console.log(payload);
            return removeFavoriteBook(state, payload.id);
        default:
            return state;
    }
}

export function addFavoriteBook (state: Book[], book: Book) {
    let isAdded: boolean = _.some(state, { 'id': book.id });
    
    let favBooks = (!isAdded) ? [...state, book] : state;
    console.log(favBooks);
    return favBooks;
}

export function removeFavoriteBook (state: Book[], bookId: string) {
    return _.reject(state, { 'id': bookId });
}