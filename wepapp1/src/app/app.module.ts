import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { StarComponent } from './star/star.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    WelcomeComponent,
    StarComponent,
    ProductdetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
