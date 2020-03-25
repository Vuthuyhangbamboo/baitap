import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProductService } from '../services/add-product.service'
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getProduct(id);
  }


  getProduct(id){
    return this.products.find(product => product.id == id);
  }
  
  // products;
  // selected: Product;
  // showDetail(product){
  //   this.selected = product;
  //   console.log(this.selected);
  // }
  removeItem(id){
    this.products = this.productService.removeProduct(id);
    // this.products = this.products.filter(product => product.id != id)
  }
}
