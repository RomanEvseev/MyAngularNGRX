import { createSelector } from '@ngrx/store';
import { AppStateInterface } from './interfaces';


export const selectFeature = (state: AppStateInterface) => state.books;

export const cartSelector = createSelector(
    selectFeature,
    (state) => state.books
);

export const errorSelector = createSelector(
    selectFeature,
    (state) => state.error
);
