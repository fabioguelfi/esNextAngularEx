import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spred-operator',
  templateUrl: './spred-operator.component.html',
  styleUrls: ['./spred-operator.component.css']
})
export class SpredOperatorComponent implements OnInit {

  public front = Array.of('react', 'vue', 'angular');

  public back = Array.of('python', 'ruby', 'nodejs');

  public fullStack = [...this.front, ...this.back];

  public fullStackMore = [... this.front, 'rxjs' , ... this.back]

  constructor() { }

  ngOnInit() {
    console.log(this.fullStack);
    console.log(this.fullStackMore);
  }

}
