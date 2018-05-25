import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-destructuring',
  templateUrl: './destructuring.component.html',
  styleUrls: ['./destructuring.component.css']
})
export class DestructuringComponent implements OnInit {

  public data = Array.of({ name: 'fabio', surname: 'guelfi' }, { name: 'ricardo', surname: 'george' })

  constructor() { }

  ngOnInit() {
    this.print();
  }

  public print() {
    // object destructuring
    const { name, surname } = this.data.find(person => person.name === 'fabio');
    console.log(name);
    console.log(surname);
    
    // object destructuring with alias to var
    const { name: n, surname: s } = this.data.find(person => person.name === 'ricardo');
    console.log(n);
    console.log(s);
  }

}
