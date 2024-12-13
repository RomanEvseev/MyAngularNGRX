import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppStateInterface, IBook } from '../interfaces';
import { Observable, ReplaySubject, Subscription } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { cartSelector } from '../book.selector';
import * as CartActions from '../store/book.actions';
import { DataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-book-cart-content-dialog',
  templateUrl: './book-cart-content-dialog.component.html',
  styleUrl: './book-cart-content-dialog.component.css'
})
export class BookCartContentDialogComponent implements OnInit, OnDestroy {
  cart$: Observable<IBook[]>;
  books: IBook[];
  booksCartHeaders: string[];
  dataSource: ExampleDataSource;
  subscription: Subscription;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private store: Store<AppStateInterface>
  ) {
    this.cart$ = this.store.pipe(select(cartSelector));
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe;
  }
  ngOnInit(): void {
    this.subscription = this.cart$
      .subscribe(data => this.books = data);
    this.booksCartHeaders = Object.keys(this.books[0]);
    this.dataSource = new ExampleDataSource(this.books);
    console.log(this.books);
  }
  deleteBookFromCart(itemIndex: number) {
    this.books = removeAt(this.books, itemIndex);
    this.dataSource.setData(this.books);
    this.store.dispatch(CartActions.removeBookFromCartByIndex({ index: itemIndex }))
  }
}
function removeAt(arr: IBook[], i: number) {
  return [...arr.slice(0, i), ...arr.slice(i + 1)];
}
class ExampleDataSource extends DataSource<IBook> {
  private _dataStream = new ReplaySubject<IBook[]>();
  constructor(initialData: IBook[]) {
    super();
    this.setData(initialData);
  }
  connect(): Observable<IBook[]> {
    return this._dataStream;
  }
  disconnect() { }
  setData(data: IBook[]) {
    this._dataStream.next(data);
  }
}