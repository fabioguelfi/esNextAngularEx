import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-destructuring-array',
  templateUrl: './destructuring-array.component.html',
  styleUrls: ['./destructuring-array.component.css']
})
export class DestructuringArrayComponent implements OnInit {

  public data = Array.of(1,2);

  constructor() { }

  ngOnInit() {
    this.print();
  }

  public print () {
    const [one, two] = this.data;
    console.log(one);
    console.log(two);
  }

}
