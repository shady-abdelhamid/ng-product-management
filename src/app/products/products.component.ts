import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'pm-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  pageTitle: string = 'Product list';
  
  products: Product[]
  constructor() { }

  ngOnInit() {
  }

}
