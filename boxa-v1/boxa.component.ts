import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-boxa',
  templateUrl: './boxa.component.html',
  styleUrls: ['./boxa.component.css']
})
export class BoxaComponent implements OnInit {
  
  labelValue: any;
  data: any;
  counter = 0;

  constructor() { }

  ngOnInit(): void {
  }
  onchange(event: Event) {
    this.data = (event.target  as HTMLInputElement).value;
  }
}
