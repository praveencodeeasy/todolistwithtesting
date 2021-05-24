import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTasks'
})
export class FilterTasksPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (args == 'complete') {
      return value.filter((a) => { return a.status == true })
    }
    if (args == 'incomplete') {
      return value.filter((a) => { return a.status == false })
    }
    return value;
  }

}
