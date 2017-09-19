/**
 * Created by Lierluo on 2017/9/13.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { GoodShopComponent } from './good-shop/good-shop.component';
import { CannotFindComponent } from './cannot-find/cannot-find.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PersonComponent } from './person/person.component';
import { GoodsDetailComponent } from './goods-detail/goods-detail.component';




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
    path: 'goods-detail',
    component: GoodsDetailComponent
  },

  {
    path: 'register',
  component: RegisterComponent
  },
  {
    path: 'person',
    component: PersonComponent
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
