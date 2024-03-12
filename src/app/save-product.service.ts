import { Injectable } from '@angular/core';
import { Product } from './product/product.module';

@Injectable({
  providedIn: 'root'
})
export class SaveProductService {
  public cart: Product[];

  constructor() {
    this.cart = [];
  }

  public saveProduct(newProduct: Product, cart: Product[]): void {
    cart.push(newProduct);
  }
}
