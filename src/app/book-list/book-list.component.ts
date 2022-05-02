import { Component, OnInit } from '@angular/core';
// import { BooksdaoService} from '../booksdao.service'
import { ActivatedRoute } from '@angular/router';
import { Router} from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  title = 'Financial Books';
  currentTab = 1;
  books: Array<any> =[ ];
  // constructor(private booksvc: BooksdaoService) { }
  // ngOnInit(): void {
  //   this.books = this.booksvc.getBooks();
  // }

  constructor( private activeroute: ActivatedRoute,
    private router: Router ) { }

    ngOnInit() {
      this.activeroute.data.subscribe(
        (data) => this.books = data['books'] );
    }

  onbuy(book:any) {
    console.log('Book added to the Cart...' + book.name +' '+ book.price);
  }
  isTabSelected(tabIndex: number) {
    return this.currentTab === tabIndex;
  }
  onTabChange(event: any, tabIndex: number) {
    event.preventDefault(); // To stop flicker
    this.currentTab = tabIndex;
    console.log('Tab Selected: '+this.currentTab );
  }
}
