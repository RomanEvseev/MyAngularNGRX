import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AppStateInterface, IBook } from '../interfaces';
import { select, Store } from '@ngrx/store';
import { cartSelector } from '../book.selector';
import { MatDialog } from '@angular/material/dialog';
import { BookCartContentDialogComponent } from '../book-cart-content-dialog/book-cart-content-dialog.component';

@Component({
  selector: 'app-booking-cart',
  templateUrl: './booking-cart.component.html',
  styleUrl: './booking-cart.component.css'
})
export class BookingCartComponent {
  cart$: Observable<IBook[]>;
  constructor(
    private store: Store<AppStateInterface>,
    private matDialog: MatDialog
  ) {
    this.cart$ = this.store.pipe(select(cartSelector));
  }
  showBookCart() {
    const dialogRef = this.matDialog.open(BookCartContentDialogComponent,
      {
        width: '500px',
        height: '500px',
        data: {
          message: 'BIG TV5'
        }
      }
    );
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
