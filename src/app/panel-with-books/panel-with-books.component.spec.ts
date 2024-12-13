import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelWithBooksComponent } from './panel-with-books.component';
import { BookItemComponent } from '../book-item/book-item.component';

describe('PanelWithBooksComponent', () => {
  let component: PanelWithBooksComponent;
  let fixture: ComponentFixture<PanelWithBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PanelWithBooksComponent, BookItemComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PanelWithBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
