import { Component, Input } from '@angular/core';
import { IBook } from '../interfaces';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrl: './book-item.component.css'
})
export class BookItemComponent {
  @Input() books: IBook[];
}
