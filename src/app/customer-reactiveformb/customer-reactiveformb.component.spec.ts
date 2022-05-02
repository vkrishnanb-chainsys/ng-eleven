import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerReactiveformbComponent } from './customer-reactiveformb.component';

describe('CustomerReactiveformbComponent', () => {
  let component: CustomerReactiveformbComponent;
  let fixture: ComponentFixture<CustomerReactiveformbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerReactiveformbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerReactiveformbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
