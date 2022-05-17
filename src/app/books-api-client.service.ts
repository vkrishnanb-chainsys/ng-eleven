import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
// import {Observable} from 'rxjs-compat/Observable';
// import 'rxjs/add/operator/map';
//Property 'map' does not exist on type 'Observable<Response>'.
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BooksApiClientService {
  apiBooksUrl = "http://localhost:8000/book/view/book_by_title" ;

  constructor(private http: Http) {  }
  getBooks() {
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    return this.http.get(this.apiBooksUrl, { headers: headers });
  };

  getBooksStream() {
    const booksStream = this.http.get(this.apiBooksUrl);
    return booksStream.pipe(map(resp => resp.json()));
  };
}
