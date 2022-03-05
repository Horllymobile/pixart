import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countItem'
})
export class CountItemPipe implements PipeTransform {

  transform(value: any[]): unknown {
    return value.length;
  }

}
