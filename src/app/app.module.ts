import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {PrettyTimePipe} from "../../projects/meta/src/lib/pretty-time.pipe";

@NgModule({
  declarations: [
    AppComponent,
    PrettyTimePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
