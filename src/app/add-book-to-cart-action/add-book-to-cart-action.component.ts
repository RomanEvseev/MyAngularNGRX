import { Component, Input } from '@angular/core';
import { AppStateInterface, IBook } from '../interfaces';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { cartSelector } from '../book.selector';
import * as CartActions from '../store/book.actions';

@Component({
  selector: 'app-add-book-to-cart-action',
  templateUrl: './add-book-to-cart-action.component.html',
  styleUrl: './add-book-to-cart-action.component.css'
})
export class AddBookToCartActionComponent {
  @Input() book: IBook;
  cart$: Observable<IBook[]>;
  constructor(private store: Store<AppStateInterface>) {
    this.cart$ = this.store.pipe(select(cartSelector));
  }
  addBook() {
    this.store.dispatch(CartActions.postCart({ books: this.book }))
  }
}
