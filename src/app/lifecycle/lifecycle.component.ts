import { Component, OnInit, Input, OnDestroy, SimpleChanges  } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms'
import {BooksdaoService} from '../booksdao.service'
import { Router} from '@angular/router'
@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit, OnDestroy {
  bookForm: FormGroup | any;
  @Input()
  bookName: string = '';
  @Input()
  book ={
    name: '',
    price: '',
    author: '',
    canBuy: false,
    description: '',
    publishdate: '',
    discount: ''
  }
  // using the constructor for injection
  constructor(private fb: FormBuilder, private booksvc: BooksdaoService, private router: Router) { }
// using the onInit for initializing Form Group
  ngOnInit(): void {
    console.log("OnInit");
    this.bookForm = this.fb.group ( {
      name: [this.book.name,[Validators.required, Validators.minLength(3)]],
      price:  [this.book.price],
      author:  [this.book.author,[Validators.required, Validators.minLength(3)]],
      canBuy:  [this.book.canBuy],
      description:  [this.book.description],
      publishdate:  [this.book.publishdate,[Validators.required, Validators.minLength(3)]],
      discount:  [this.book.discount]
    });
  }
  ngOnDestroy() {
    console.log("OnDestroy");

    this.bookForm = null;
  }
  get name() { return this.bookForm.get('name')!;}
get author() { return this.bookForm.get('author')!;}
// set name(data:any ){ this.bookForm.set('name',data);}
ngOnChanges(changes: SimpleChanges) {
  for (const propName in changes) {
    const chng = changes[propName];
    const cur  = JSON.stringify(chng.currentValue);
    const prev = JSON.stringify(chng.previousValue);
    console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
  }
}
onUpdate(book:any) {
  console.log('UpdateButton Clicked '+ book.name);
  try{
    this.book.name = book.name;
    this.book.price = book.price;
  } catch( err:any)
  {
    console.log('ERROR!!! ' + err.message)
  }
 
}
}
