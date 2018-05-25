import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array-findand-index',
  templateUrl: './array-findand-index.component.html',
  styleUrls: ['./array-findand-index.component.css']
})
export class ArrayFindandIndexComponent implements OnInit {

  public data: Array<any> = Array.of({ name: 'fabio', surname: 'guelfi' }, { name: 'ricardo', surname: 'guelfi' });

  constructor() { }

  ngOnInit() {
    console.log(

      this.data.find(person => person.name === 'fabio'),
      this.data.findIndex(person => person.name === 'ricardo')

    )
  }


}
