import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { reducers } from './store/book.reducers';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BookingCartComponent } from './booking-cart/booking-cart.component';
import { MatCardModule } from '@angular/material/card';
import { BookItemComponent } from './book-item/book-item.component';
import { MatBadgeModule } from '@angular/material/badge';
import { PanelWithBooksComponent } from './panel-with-books/panel-with-books.component';
import { BookCartContentDialogComponent } from './book-cart-content-dialog/book-cart-content-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { AddBookToCartActionComponent } from './add-book-to-cart-action/add-book-to-cart-action.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BookingCartComponent,
    BookItemComponent,
    PanelWithBooksComponent,
    BookCartContentDialogComponent,
    AddBookToCartActionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatBadgeModule,
    MatDialogModule,
    MatTableModule,
    StoreModule.forRoot({
      books: reducers
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    NgbModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
