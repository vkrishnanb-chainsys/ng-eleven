import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes} from '@angular/router'
import { FormsModule, ReactiveFormsModule  } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppHeaderComponent } from './app.header.component';
import { BoxaComponent } from './boxa/boxa.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { CountDisplayComponent } from './count-display/count-display.component';
import { HitButtonComponent } from './hit-button/hit-button.component';
import { CounterAppComponent } from './counter-app/counter-app.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { CustomerReactiveformbComponent } from './customer-reactiveformb/customer-reactiveformb.component';
import { BookListComponent } from './book-list/book-list.component';
import { PriceDiscountPipe } from './price-discount.pipe';
import { BookComponent } from './book/book.component';
import { TabComponent } from './tab/tab.component';
import { BookCatlogComponent } from './book-catlog/book-catlog.component';
import { NewsComponent } from './news/news.component';
import { MenuComponent } from './menu/menu.component';
import { BookformComponent } from './bookform/bookform.component'
import {BooksResolver} from './books.resolver';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { OnchangeBoxComponent } from './onchange-box/onchange-box.component';
const routes: Routes =[
  {path: '', component: HomeComponent},
  {path: 'news', component: NewsComponent},
  {path: 'lifecycle', component: LifecycleComponent},
  {path: 'books', component: BookCatlogComponent,
resolve: {books: BooksResolver}},
  {path: 'addbook', component: BookformComponent},

];
@NgModule({
  declarations: [
    AppComponent, HomeComponent, AppHeaderComponent, BoxaComponent,
    CustomerFormComponent, CountDisplayComponent, HitButtonComponent,
    CounterAppComponent, EmployeeFormComponent, CustomerReactiveformbComponent,
    BookListComponent, PriceDiscountPipe, BookComponent, TabComponent, BookCatlogComponent,
    NewsComponent, MenuComponent, BookformComponent, LifecycleComponent,OnchangeBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule ,
    RouterModule.forRoot(routes)
  ],
  providers: [ BooksResolver],
  bootstrap: [ AppComponent]
})
export class AppModule { }
