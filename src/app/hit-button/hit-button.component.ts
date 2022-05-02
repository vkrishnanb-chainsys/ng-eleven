import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-hit-button',
  templateUrl: './hit-button.component.html',
  styleUrls: ['./hit-button.component.css']
})
export class HitButtonComponent implements OnInit {

    // input properties
    @Input()
    label: number = 0;
  // output properties
  @Output()
  hit = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  
 btnClickHandler() {
    this.hit.emit(this.label);
  }

}
