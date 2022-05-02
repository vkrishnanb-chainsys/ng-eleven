import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input()
  book: any;

  constructor() { }

  ngOnInit(): void {
  }
 onbuy(book:any) {
    console.log('Book added to the Cart...' + book.name +' '+ book.price);
  }
}
