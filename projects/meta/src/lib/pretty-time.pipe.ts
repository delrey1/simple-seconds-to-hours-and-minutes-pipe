import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'prettyTime'
})
export class PrettyTimePipe implements PipeTransform {

  transform(value: number, options: PrettyTimeOptions = {}): string {

    let out = '';

    const hours = Math.trunc(value / 60 / 60)
    const minutes = Math.trunc((value / 60)) - (hours * 60)


    if (hours > 0) {
      out += hours + (options.hoursNotation ?? ' hour') + (hours != 1 && (options.appendS ?? true) ? 's' : '') + ' ';
    }
    if (minutes > 0 && (options.showMinutes ?? true)) {
      out += minutes + (options.minutesNotation ?? ' minute') + (minutes != 1 && (options.appendS ?? true) ? 's' : '');
    }

    return out.trim();


  }

}


export interface PrettyTimeOptions {
  minutesNotation?: string
  hoursNotation?: string
  showMinutes?: boolean
  appendS?: boolean;
}
