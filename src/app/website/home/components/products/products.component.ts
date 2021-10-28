import { Component, OnInit } from '@angular/core';

import { ProductsService } from 'src/app/core/services/products.service';
//from '@core/services/products.service';
import { Product } from 'src/app/core/models';
//from '@core/models';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.productsService.getNewProducts()
    .subscribe(products => {
      this.products = products;
    });
  }

}
