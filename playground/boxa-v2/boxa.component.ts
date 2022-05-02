import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-boxa',
  templateUrl: './boxa.component.html',
  styleUrls: ['./boxa.component.css']
})
/**
 * @Input() lets a parent component update data in the child component.
 * @Output() lets the child send data to a parent component.
 */
export class BoxaComponent implements OnInit {
  @Input()
  labelValue: any;
  @Input()
  data: any;
  counter = 0;

  constructor() { }

  ngOnInit(): void {
  }
  onchange(event: Event) {
    this.data = (event.target  as HTMLInputElement).value;
  }
}
