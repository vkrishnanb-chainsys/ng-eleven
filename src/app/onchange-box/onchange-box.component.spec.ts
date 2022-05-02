import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnchangeBoxComponent } from './onchange-box.component';

describe('OnchangeBoxComponent', () => {
  let component: OnchangeBoxComponent;
  let fixture: ComponentFixture<OnchangeBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnchangeBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnchangeBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
