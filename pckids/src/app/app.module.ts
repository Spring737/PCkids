import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { GoodShopComponent } from './good-shop/good-shop.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    GoodShopComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
