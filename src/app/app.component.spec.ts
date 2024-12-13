import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PanelWithBooksComponent } from './panel-with-books/panel-with-books.component';
import { BookingCartComponent } from './booking-cart/booking-cart.component';
import { provideMockStore } from '@ngrx/store/testing';
import { BookItemComponent } from './book-item/book-item.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatToolbarModule,
        RouterModule.forRoot([])
      ],
      declarations: [
        AppComponent,
        NavbarComponent,
        PanelWithBooksComponent,
        BookingCartComponent,
        BookItemComponent
      ],
      providers: [provideMockStore({})],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
