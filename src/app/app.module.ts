import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './pages/app.component';
import { ProductItemComponent } from './items/product-item';
import { SaveProductService } from './save-product.service';
import { CartComponent } from './pages/cart/cart.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment.development';

@NgModule({
  declarations: [
    AppComponent,
    ProductItemComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [SaveProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
