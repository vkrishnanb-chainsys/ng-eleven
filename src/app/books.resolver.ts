import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { BooksdaoService} from './booksdao.service'

@Injectable({
  providedIn: 'root'
})
export class BooksResolver implements Resolve<any> {
  constructor(private booksvc: BooksdaoService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return of(this.booksvc.getBooks());
  }
}
