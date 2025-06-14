import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  books: Array<any> = [];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.display();
  }

  display() {
    //fill the code
    this.books = this.bookService.getBooks();
  }
}
