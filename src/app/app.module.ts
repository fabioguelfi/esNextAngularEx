import { ArrayOfComponent } from './array-of/array-of.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DefaultParamsComponent } from './default-params/default-params.component';
import { ArrayFindandIndexComponent } from './array-findand-index/array-findand-index.component';
import { DestructuringComponent } from './destructuring/destructuring.component';
import { DestructuringArrayComponent } from './destructuring-array/destructuring-array.component';
import { SpredOperatorComponent } from './spred-operator/spred-operator.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultParamsComponent,
    ArrayOfComponent,
    ArrayFindandIndexComponent,
    DestructuringComponent,
    DestructuringArrayComponent,
    SpredOperatorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
