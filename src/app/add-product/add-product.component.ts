import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProductService } from '../services/add-product.service'
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
product: Product = new Product();
  constructor( private productService: ProductService) { }

  ngOnInit() {
  }
addProduct(){
    this.productService.addProduct(this.product);
  }
}