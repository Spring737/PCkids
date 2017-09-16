import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { GoodShopComponent } from './good-shop/good-shop.component';
import { CannotFindComponent } from './cannot-find/cannot-find.component';
import { LoginComponent } from './login/login.component';
import {AppRoutingModule} from './app-routing.module';
import {ParentingModule} from './parenting/parenting.module';
import { RegisterComponent } from './register/register.component';
import { PersonComponent } from './person/person.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    GoodShopComponent,
    CannotFindComponent,
    LoginComponent,
    RegisterComponent,
    PersonComponent,
  ],
  imports: [
    BrowserModule,
    ParentingModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
