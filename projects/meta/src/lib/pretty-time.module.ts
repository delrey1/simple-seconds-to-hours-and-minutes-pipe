import {NgModule} from '@angular/core';
import {PrettyTimePipe} from "./pretty-time.pipe";


@NgModule({
  declarations: [PrettyTimePipe],
  exports: [
    PrettyTimePipe
  ]
})
export class PrettyTimeModule {
}
