import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {PrettyTimeModule} from "../../projects/meta/src/lib/pretty-time.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrettyTimeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
