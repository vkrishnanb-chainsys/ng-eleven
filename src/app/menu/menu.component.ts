import { Component, OnInit, 
  ViewContainerRef,
  ComponentRef } from '@angular/core';
import {LifecycleComponent} from '../lifecycle/lifecycle.component'
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  componentRef!: ComponentRef < LifecycleComponent > ;
  count:number = 1;
  bName:string = 'Beast';
  book ={
    name: '',
    price: '',
    author: '',
    canBuy: false,
    description: '',
    publishdate: '',
    discount: ''
  }
  constructor(private vcf:ViewContainerRef) { }
 
  ngOnInit(): void {
  }
  createComponent() {
    this.componentRef = this.vcf.createComponent(LifecycleComponent);
    console.log("component" + " " + "created successfully");

}
destroyComponent() {
    // destroy a component using the componentRef.
    this.componentRef.destroy();
    console.log("component" + " " + "destroy successfully");
}
onBookNameChangeClick(bname:string ) {
  console.log('onBookNameChange Clicked '+ bname);
  try{
  //  const lifecomp: LifecycleComponent = this.componentRef.instance;
  //  lifecomp.book.name = bname;
   this.bName = bname + this.count++;
   this.book.name = bname + this.count;
  } catch( err:any)
  {
    console.log('ERROR!!! ' + err.message)
  }
 
}
}
