import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { ParentingComponent } from './parenting.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { QuestionComponent } from './question/question.component';
import { QuestionDetailComponent } from './question-detail/question-detail.component';
import { ParentingIndexComponent } from './parenting-index/parenting-index.component';

// 导入路由模块
import { ParentingRoutingModule } from './parenting-routing.module';
import { ArticleSearchComponent } from './article-search/article-search.component';
import { QuestionSearchComponent } from './question-search/question-search.component';
import { QuestionSearchPipe } from './pipes/question-search.pipe';
import { ArticleSearchPipe } from './pipes/article-search.pipe';
import { ArticleShrinkPipe } from './pipes/article-shrink.pipe';
import { QuestionShrinkPipe } from './pipes/question-shrink.pipe';
import { QuestionAsideComponent } from './question-aside/question-aside.component';
import { ArticleAsideComponent } from './article-aside/article-aside.component';



@NgModule({
  declarations: [
    ParentingComponent,
    ArticleDetailComponent,
    QuestionComponent,
    QuestionDetailComponent,
    ParentingIndexComponent,
    ArticleSearchComponent,
    QuestionSearchComponent,
    QuestionSearchPipe,
    ArticleSearchPipe,
    ArticleShrinkPipe,
    QuestionShrinkPipe,
    QuestionAsideComponent,
    ArticleAsideComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ParentingRoutingModule
  ],
  providers: [],
  bootstrap: [ParentingComponent]
})
export class ParentingModule {
}
