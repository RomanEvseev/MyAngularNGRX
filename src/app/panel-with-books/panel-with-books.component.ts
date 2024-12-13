import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { IBook } from '../interfaces';

@Component({
  selector: 'app-panel-with-books',
  templateUrl: './panel-with-books.component.html',
  styleUrl: './panel-with-books.component.css'
})
export class PanelWithBooksComponent implements OnInit {
  books: IBook[];
  currentItem = 'Television';
  constructor(private bookService: BookService) { }
  ngOnInit() {
    this.bookService.getBooks().then((data) => {
      this.books = data;
      console.log(data);
    }
    );
  }
}
