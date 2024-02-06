import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductItemComponent } from './items/product-item';
import { SaveProductService } from './save-product.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SaveProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
