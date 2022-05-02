import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms'
import {BooksdaoService} from '../booksdao.service'
import { Router} from '@angular/router'
@Component({
  selector: 'app-bookform',
  templateUrl: './bookform.component.html',
  styleUrls: ['./bookform.component.css']
})
export class BookformComponent implements OnInit {
  bookForm: FormGroup;
  no: string = '';
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
  constructor(private fb: FormBuilder, private booksvc: BooksdaoService, private router: Router) { 
    
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


  ngOnInit(): void {
  
  }
get name() { return this.bookForm.get('name')!;}
get author() { return this.bookForm.get('author')!;}

onAddButtonClick(book:any) {
  console.log('Button Clicked '+ book.name);
  try{
    this.booksvc.addBook(book);
    this.router.navigate(['/books']);
  } catch( err:any)
  {
    console.log('ERROR!!! ' + err.message)
  }
 
}

}
