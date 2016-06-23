export const searchBooks = (state: any = [], { type, payload }) => {
    switch (type) {
        case 'ADD_BOOKS':
            return payload;
        default:
            return state;
    }
}