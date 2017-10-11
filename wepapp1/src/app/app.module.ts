import { ConvertToSpaces } from './shared/convert-to-spaces.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { StarComponent } from './star/star.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    WelcomeComponent,
    StarComponent,
    ProductdetailComponent,
    ConvertToSpaces
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
