import { createAction, props } from "@ngrx/store";
import { IBook } from "../interfaces";

export const getCart = createAction(
    '[Cart] Get Cart Items',
);

export const postCart = createAction(
    '[Cart] Post Cart',
    props<{ books: IBook }>()
);

export const removeBookFromCart = createAction(
    '[Cart] Remove Book from Cart',
    props<{ product: IBook }>()
);

export const removeBookFromCartByIndex = createAction(
    '[Cart] Remove Book from Cart By Index',
    props<{ index: number }>()
);

export const getCartFailure = createAction(
    '[Cart] Get Cart failure',
    props<{ error: string }>()
);