import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-count-display',
  templateUrl: './count-display.component.html',
  styleUrls: ['./count-display.component.css']
})
export class CountDisplayComponent implements OnInit {

   // input properties

   @Input()
   count: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
