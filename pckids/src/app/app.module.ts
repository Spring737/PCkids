import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { GoodShopComponent } from './good-shop/good-shop.component';
import {ParentingComponent } from './parenting/parenting.component';
import { CannotFindComponent } from './cannot-find/cannot-find.component';
import { ArticleDetailComponent } from './parenting/article-detail/article-detail.component';
import { QuestionComponent } from './parenting/question/question.component';
import { QuestionDetailComponent } from './parenting/question-detail/question-detail.component';
import { LoginComponent } from './login/login.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    GoodShopComponent,
    ParentingComponent,
    CannotFindComponent,
    ArticleDetailComponent,
    QuestionComponent,
    QuestionDetailComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
