import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-params',
  templateUrl: './default-params.component.html',
  styleUrls: ['./default-params.component.css']
})
export class DefaultParamsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(this.nameClient());
    console.log(this.nameClient('fabio', 'guelfi'));
  }

  public nameClient(name = 'fulano', surname = 'ciclano') {
    console.log(`Hello ${name} ${surname}`);
  }

}
