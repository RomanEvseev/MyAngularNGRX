import { createReducer, on } from '@ngrx/store';
import { ICart } from '../interfaces';
import * as PostsActions from '../store/book.actions';

export const initialState: ICart = {
    books: [],
    error: null,
};

export const reducers = createReducer(
    initialState,
    on(PostsActions.getCart, (state) => ({
        ...state,
    })),
    on(PostsActions.postCart, (state, action) => {
        state = {
            ...state,
            books: [...state.books, action.books]
        }
        return state;
    }),
    on(PostsActions.removeBookFromCart, (state, action) => {
        const books = [...state.books];
        const index = books.findIndex(x => x.id === action.product.id);
        books.splice(index, 1);
        state = {
            ...state,
            books: books
        }
        return state;
    }),
    on(PostsActions.removeBookFromCartByIndex, (state, action) => {
        const books = [...state.books];
        state = {
            ...state,
            books: [...books.slice(0, action.index), ...books.slice(action.index + 1)]
        }
        return state;
    }),
    on(PostsActions.getCartFailure, (state, action) => ({
        ...state,
        error: action.error,
    }))
);
