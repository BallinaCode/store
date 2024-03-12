import { Injectable } from '@angular/core';
import { Product } from './product/product.module';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private firestore: AngularFirestore) { }

  // método que permite obtener todos los documentos de la colección
  getProducts() {
    return this.firestore.collection('carrito').snapshotChanges();
  }

  getProductById(productId: string): Observable<Product> {
    return this.firestore.collection('carrito').doc(productId).valueChanges() as Observable<Product>;
  }

  getProductIdByName(productName: string): Observable<string> {
    return new Observable<string>(observer => {
      this.firestore.collection('carrito', ref => ref.where('name', '==', productName).limit(1))
        .get()
        .subscribe(querySnapshot => {
          if (querySnapshot.size > 0) {
            querySnapshot.forEach(doc => {
              observer.next(doc.id);
            });
          } else {
            observer.error('Producto no encontrado');
          }
        });
    });
  }

  incrementStockByName(productName: string): Observable<void> {
    return new Observable<void>(observer => {
      this.getProductIdByName(productName).subscribe(productId => {
        this.firestore.collection('carrito').doc(productId).get().subscribe(productDoc => {
          if (productDoc.exists) {
            const productData = productDoc.data() as Product;
            if (productData && productData.stock !== undefined) {
              const currentStock = productData.stock;
              const newStock = currentStock + 1;
              this.firestore.collection('carrito').doc(productId).update({ stock: newStock })
                .then(() => {
                  observer.next();
                })
                .catch(error => {
                  observer.error(error);
                });
            } else {
              observer.error('El documento no tiene la estructura esperada');
            }
          } else {
            observer.error('Producto no encontrado');
          }
        }, error => {
          observer.error(error);
        });
      }, error => {
        observer.error(error);
      });
    });
  }

  // //método para insertar un método nuevo en la colección
  // createLibro(nuevoLibro: Libro) {
  //   return this.firestore.collection('libros').add(Object.assign({}, nuevoLibro));
  // }

  //métdo para actualizar un documento existente
  async updateProduct(id: string) {
    const productoNube = this.firestore.collection('carrito').doc(id);
    const productoSnapshot = productoNube.get();
    console.log(productoSnapshot);

    // await productoNube.update({
    //   stock: 
    // });

  }

  // //método para eliminar un documento
  // deleteLibro(libroId: string) {
  //   this.firestore.doc('libros/' + libroId).delete();
  // }
}
