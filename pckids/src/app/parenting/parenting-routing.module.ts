/**
 * Created by Lierluo on 2017/9/13.
 */
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


import { ParentingComponent } from './parenting.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { QuestionComponent } from './question/question.component';
import { QuestionDetailComponent } from './question-detail/question-detail.component';
import { ParentingIndexComponent } from './parenting-index/parenting-index.component';



const routes: Routes = [
  {
    path: 'parenting',
    component: ParentingComponent,
  children: [
  {
    path: 'article-detail',
    component: ArticleDetailComponent
  },
  {
    path: 'question-detail',
    component: QuestionDetailComponent
  },
  {
    path: 'question',
    component: QuestionComponent
  },
    {
      path: 'parenting-index',
      component: ParentingIndexComponent
    },
  {
    path: '',
    component: ParentingIndexComponent
  },
]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ParentingRoutingModule {}
