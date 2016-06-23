export const selectedBook = (state: any = [], { type, payload }) => {
    switch (type) {
        case 'SELECTED_BOOK':
            return payload;
        default:
            return state;
    }
}