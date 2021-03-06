import { Component, OnInit, Input } from '@angular/core';

import { Product } from 'src/app/core/models';
//from '@core/models';
import { CartService } from 'src/app/core/services/cart.service';
//from '@core/services/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product: Product;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
  }

  addProduct() {
    this.cartService.addProduct(this.product);
  }

}
