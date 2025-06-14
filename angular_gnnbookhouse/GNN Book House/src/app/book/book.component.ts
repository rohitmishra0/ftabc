import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../Book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() book: any = new Book('', '', '', 0, 0);
  error: string = '';

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    //fill the code
    this.error = '';
  }

  addBook() {
    //fill the code
    
    try {
      this.validation();
      this.bookService.addBook(this.book);
      this.book = new Book('', '', '', 0, 0); // Reset
      this.error = '';
    } catch (e: any) {
      this.error = e;
    }
  }

  validation() {
    if (!this.book.isbn) throw "Provide value for ISBN";
    if (!this.book.bookName) throw "Provide value for book name";
    if (!this.book.author) throw "Provide value for author";
    if (!this.book.price) throw "Provide value for price";
    if (!this.book.quantity) throw "Provide value for quantity";
  }
}
