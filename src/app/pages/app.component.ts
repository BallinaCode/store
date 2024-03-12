import { Component, Input, ChangeDetectorRef, OnInit } from '@angular/core';
import { SaveProductService } from '../save-product.service';
import { Product } from '../product/product.module';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {

  constructor(private productService: ProductService) { }

  products!: Product[];

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data.map(doc => {
        return {
          ...doc.payload.doc.data() as Product,
          id: doc.payload.doc.id
        };
      });
    });
  }

  productImgs: string[] = [
    "assets/img/camara.jpg",
    "assets/img/accesorios.jpg",
    "assets/img/perfume.jpg",
    "assets/img/adorno.jpg",
    "assets/img/aceite.jpg",
    "assets/img/cepillo.jpg",
    "assets/img/jabón.jpg",
    "assets/img/labial.jpg",
    "assets/img/miel.jpg",
    "assets/img/platos.jpg"
  ];

  addToCart(newProduct: Product) {
    // this.products[this.products.indexOf(newProduct)].stock += 1;
    // this.products.forEach(product => {
    //   if (product.stock > 0) {

    //   }
    // });
    // this.productService.getProductById("");
    // this.productService.getProductById("4IaYHyOyEOGZHJOU5ati").subscribe((product: Product) => {
    //   if (product) {
    //     console.log('Nombre del producto:', product.name);
    //   } else {
    //     console.log('Producto no encontrado');
    //   }
    // });

    this.productService.incrementStockByName(newProduct.name).subscribe(productId => {
      console.log('ID del producto:', productId);
    }, error => {
      console.error(error);
    });
  }
}
