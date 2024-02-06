import { Component } from '@angular/core';
import { Product } from '../product/product.module';
import { SaveProductService } from '../save-product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {

  constructor(public saveProductService: SaveProductService) { }

  products: Product[] = [
    { name: "Cámara", imgUrl: "assets/img/camara.jpg" },
    { name: "Accesorios", imgUrl: "assets/img/accesorios.jpg" },
    { name: "Perfume", imgUrl: "assets/img/perfume.jpg" },
    { name: "Adorno", imgUrl: "assets/img/adorno.jpg" },
    { name: "Aceite", imgUrl: "assets/img/aceite.jpg" },
    { name: "Cepillo", imgUrl: "assets/img/cepillo.jpg" },
    { name: "Jabón", imgUrl: "assets/img/jabón.jpg" },
    { name: "Labial", imgUrl: "assets/img/labial.jpg" },
    { name: "Miel", imgUrl: "assets/img/miel.jpg" },
    { name: "Platos", imgUrl: "assets/img/platos.jpg" }
  ];

  addToCart(newProduct: Product) {
    this.saveProductService.saveProduct(newProduct, this.saveProductService.cart);
    alert(newProduct.name + " agregado al carrito");
    this.printCart()
  }

  printCart() { // los imprime en consola
    console.log(([this.saveProductService.cart]));
  }

}
