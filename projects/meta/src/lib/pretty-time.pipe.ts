import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'prettyTime'
})
export class PrettyTimePipe implements PipeTransform {

  transform(value: number, options: PrettyTimeOptions = {}): string {

    let out = '';

    let hours = Math.trunc(value / 60 / 60)
    const minutes = Math.trunc((value / 60)) - (hours * 60)
    const seconds = Math.trunc(value) - (hours * 60 * 60) - (minutes * 60)


    if (hours > 0 || (options.roundNearestHour && minutes > 30)) {
      if (options.roundNearestHour) {
        hours = hours + ((minutes > 30) ? 1 : 0)
        return (hours) + (options.hoursNotation ?? ' hour') + (hours != 1 && (options.appendS ?? true) ? 's ' : '') + ' '
      }
      out += hours + (options.hoursNotation ?? ' hour') + (hours != 1 && (options.appendS ?? true) ? 's ' : '') + ' ';
    }
    if (minutes > 0 && (options.showMinutes ?? true)) {
      out += minutes + (options.minutesNotation ?? ' minute') + (minutes != 1 && (options.appendS ?? true) ? 's ' : ' ');
    }
    if (seconds > 0 && (options.showSeconds ?? true)) {
      out += seconds + (options.secondsNotation ?? ' second') + (seconds != 1 && (options.appendS ?? true) ? 's ' : ' ');
    }
    if (value < 1) {
      out = options.lessThanASecondText ?? 'less than a second';
    }

    return out.trim();


  }

}


export interface PrettyTimeOptions {
  minutesNotation?: string
  hoursNotation?: string
  secondsNotation?: string
  showMinutes?: boolean
  showSeconds?: boolean
  appendS?: boolean;
  roundNearestHour?: boolean;
  lessThanASecondText?: string;
}
