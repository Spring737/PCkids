import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'questionShrink'
})
export class QuestionShrinkPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
