import { Component, ViewChild, ElementRef } from '@angular/core';
import { Product } from '../product/product.module';
import { SaveProductService } from '../save-product.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {

  @ViewChild('miTabla') miTabla!: ElementRef;

  constructor(public productService: ProductService) { }

  products: Product[] = [
    { name: "Cámara", imgUrl: "assets/img/camara.jpg", price: 876, stock: 2 },
    { name: "Accesorios", imgUrl: "assets/img/accesorios.jpg", price: 634, stock: 0 },
    { name: "Perfume", imgUrl: "assets/img/perfume.jpg", price: 412, stock: 0 },
    { name: "Adorno", imgUrl: "assets/img/adorno.jpg", price: 221, stock: 0 },
    { name: "Aceite", imgUrl: "assets/img/aceite.jpg", price: 132, stock: 0 },
    { name: "Cepillo", imgUrl: "assets/img/cepillo.jpg", price: 79, stock: 0 },
    { name: "Jabón", imgUrl: "assets/img/jabón.jpg", price: 47, stock: 0 },
    { name: "Labial", imgUrl: "assets/img/labial.jpg", price: 150, stock: 0 },
    { name: "Miel", imgUrl: "assets/img/miel.jpg", price: 68, stock: 0 },
    { name: "Platos", imgUrl: "assets/img/platos.jpg", price: 319, stock: 0 }
  ];

  addToCart(newProduct: Product) {
    // this.saveProductService.saveProduct(newProduct, this.saveProductService.cart);
    // alert(newProduct.name + " agregado al carrito");
    // this.printCart();
    // this.products[this.products.indexOf(newProduct)].stock += 1;
    // // console.log(this.products[this.products.indexOf(newProduct)].stock);
    // this.products = this.products;
    // this.actualizarTabla();
    this.productService.incrementStockByName(newProduct.name).subscribe(productId => {
      console.log("Added!");
    }, error => {
      console.error(error);
    });

  }

  actualizarTabla() {
    // this.productService.getProductIdByName(newP).subscribe((product: Product) => {
    //   if (product) {
    //     console.log('Nombre del producto:', product.name);
    //   } else {
    //     console.log('Producto no encontrado');
    //   }
    // });
  }

  // printCart() { // los imprime en consola
  //   console.log(([this.saveProductService.cart]));
  // }

  //Write a function to count items repeated into an array


}
