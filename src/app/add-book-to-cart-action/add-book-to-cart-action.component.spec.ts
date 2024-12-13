import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBookToCartActionComponent } from './add-book-to-cart-action.component';
import { provideMockStore } from '@ngrx/store/testing';

describe('AddBookToCartActionComponent', () => {
  let component: AddBookToCartActionComponent;
  let fixture: ComponentFixture<AddBookToCartActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideMockStore({})],
      declarations: [AddBookToCartActionComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AddBookToCartActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
