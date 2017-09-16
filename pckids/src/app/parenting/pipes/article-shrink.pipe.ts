import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'articleShrink'
})
export class ArticleShrinkPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
