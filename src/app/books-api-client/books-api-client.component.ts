import { Component, OnInit } from '@angular/core';
import { BooksApiClientService } from '../books-api-client.service';

@Component({
  selector: 'app-books-api-client',
  templateUrl: './books-api-client.component.html',
  styleUrls: ['./books-api-client.component.css'],
  providers: [BooksApiClientService]
})
export class BooksApiClientComponent implements OnInit {
  books: Array<any> = [];
  currentTab = 1;
  constructor(private booksvc: BooksApiClientService) { }

  ngOnInit(): void {
  }
  onLoad() {
    const self = this;
    this.booksvc.getBooks()
    .subscribe(function(resp ) {
      console.log(resp.json().rows);
      self.books = resp.json().rows;
    }) ;
  };
  isTabSelected(tabIndex:any ) {
    return this.currentTab === tabIndex;
  };
  onTabChange(event:any, tabIndex:any) {
    event.preventDefault();
    event.stopPropagation();
    this.currentTab = tabIndex;
  };
}
