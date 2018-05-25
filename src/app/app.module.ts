import { ArrayOfComponent } from './array-of/array-of.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DefaultParamsComponent } from './default-params/default-params.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultParamsComponent,
    ArrayOfComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
