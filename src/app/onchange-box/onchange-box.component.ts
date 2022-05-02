import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-onchange-box',
  templateUrl: './onchange-box.component.html',
  styleUrls: ['./onchange-box.component.css']
})
export class OnchangeBoxComponent implements OnInit {
  @Input()
  data: any;
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      const chng = changes[propName];
      const cur  = JSON.stringify(chng.currentValue);
      const prev = JSON.stringify(chng.previousValue);
      console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
  }
}
