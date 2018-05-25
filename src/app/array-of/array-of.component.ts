import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array-of',
  templateUrl: './array-of.component.html',
  styleUrls: ['./array-of.component.css']
})
export class ArrayOfComponent implements OnInit {

  public data: Array<any>;

  constructor() { }

  ngOnInit() {
    this.createArrayOf();
    console.log(this.data);
  }

  public createArrayOf(): void {
    this.data = Array.of(1, 7, 'ricardo', { name: 'fabio', surname: 'guelfi' });
  }

}
