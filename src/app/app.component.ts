import { Component, Input } from '@angular/core';
import { SaveProductService } from './save-product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  title = 'store';

  @Input() items: number = 0;

  constructor(saveProductService: SaveProductService) {
    this.items = saveProductService.cart.length;
  }

}
