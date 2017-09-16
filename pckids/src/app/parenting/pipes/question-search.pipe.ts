import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'questionSearch'
})
export class QuestionSearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
