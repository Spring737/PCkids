/**
 * Created by Lierluo on 2017/9/13.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { GoodShopComponent } from './good-shop/good-shop.component';
import { ParentingComponent } from './parenting/parenting.component';
import { CannotFindComponent } from './cannot-find/cannot-find.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ArticleDetailComponent } from './parenting/article-detail/article-detail.component';
import { QuestionComponent } from './parenting/question/question.component';
import { QuestionDetailComponent } from './parenting/question-detail/question-detail.component';



const routes: Routes = [


  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: 'good-shop',
    component: GoodShopComponent
  },
  {
    path: 'parenting',
    component: ParentingComponent
  },
  {
    path: 'register',
  component: RegisterComponent
  },
  {
  path: 'login',
  component: LoginComponent
},
  {
    path: '',
    redirectTo: '/index',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: CannotFindComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
