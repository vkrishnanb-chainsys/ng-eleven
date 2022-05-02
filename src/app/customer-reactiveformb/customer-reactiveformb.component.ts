import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-reactiveformb',
  templateUrl: './customer-reactiveformb.component.html',
  styleUrls: ['./customer-reactiveformb.component.css']
})
export class CustomerReactiveformbComponent implements OnInit {
  customerformGroup: FormGroup ;
  constructor() { this.customerformGroup = new FormGroup ( {
    fName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lName: new FormControl('')
  });
  }

  ngOnInit() {
    
  }
  addNewCustomer(customer: any) {
    console.log(customer.value);
  }
  onLoad() {
    const customerModel = {fName: 'Vijay' , lName: 'Kumar'};
    // this.customerformGroup.setValue(customerModel);
    this.customerformGroup.patchValue(customerModel);
  }
  /**
   * ! is non-null assertion operator (post-fix expression)
   * - it just saying to type checker that you're sure that a is not null or undefined.
   * the operation a! produces a value of the type of a with null and undefined excluded
   * 
   */
  get fName() { return this.customerformGroup.get('fName')!;}
  get lName() { return this.customerformGroup.get('lName')!;}
}
