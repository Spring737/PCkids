import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './root/app.component';
import { ParentingComponent } from './parenting/parenting.component';
import { ArticleDetailComponent } from './parenting/article-detail/article-detail.component';
import { QuestionDetailComponent } from './parenting/question-detail/question-detail.component';
import { QuestionComponent } from './parenting/question/question.component';

@NgModule({
  declarations:[
    AppComponent,
    ParentingComponent,
    ArticleDetailComponent,
    QuestionDetailComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [QuestionComponent]
})
export class AppModule { }
