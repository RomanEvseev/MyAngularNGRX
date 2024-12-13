import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookingCartComponent } from './booking-cart.component';
import { provideMockStore } from '@ngrx/store/testing';

describe('BookingCartComponent', () => {
  let component: BookingCartComponent;
  let fixture: ComponentFixture<BookingCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideMockStore({})],
      declarations: [BookingCartComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BookingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
