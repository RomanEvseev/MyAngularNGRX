import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookCartContentDialogComponent } from './book-cart-content-dialog.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { provideMockStore } from '@ngrx/store/testing';

describe('BookCartContentDialogComponent', () => {
  let component: BookCartContentDialogComponent;
  let fixture: ComponentFixture<BookCartContentDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookCartContentDialogComponent],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
        { provide: provideMockStore({}) }
      ],

    })
      .compileComponents();

    fixture = TestBed.createComponent(BookCartContentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
