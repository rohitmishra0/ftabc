import { Injectable } from '@angular/core';
import { Book } from './Book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  bookList: Array<any> = [];

  constructor() { }

  addBook(book: Book) {
    // fill the code
    this.bookList.push(book);
  }

  getBooks() {
    // fill the code
    return this.bookList;
  }
}
