import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  getBooksData() {
    return [
      {
        id: '1000',
        title: 'Java Programming',
        author: 'Sun Microsystems',
        price: 35,
        pagecount: 120,
        isbn: '149233470X'
      },
      {
        id: '1001',
        title: 'Learning Angular',
        author: 'John Dous',
        price: 25,
        pagecount: 37,
        isbn: '358299870X'
      },
      {
        id: '1002',
        title: 'HTML textbook',
        author: 'Phil Johns',
        price: 19,
        pagecount: 78,
        isbn: '149207800X'
      },
      {
        id: '1003',
        title: 'CSS textbook',
        author: 'Mike Pump',
        price: 15,
        pagecount: 121,
        isbn: '689248709Y'
      }
    ];
  }
  getBooks() {
    return Promise.resolve(this.getBooksData());
  }
}
