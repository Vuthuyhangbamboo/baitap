import { Injectable } from '@angular/core';
import { data } from '../mock';
import { Product } from '../product';

@Injectable()
export class ProductService {
  products = data;
  constructor() { }

  getProducts(){
      console.log('Hello');
      return this.products;
  }
  getProduct(id){
    return this.products.find(product => product.id == id);
  }
  removeProduct(id){
    return this.products = this.products.filter(product => product.id != id)
  }
  addProduct(product){

    console.log(product);

    let newObj = {id: 6,...product};
    console.log(newObj);
    
    this.products.push(newObj);
    console.log(this.products)

  }
  editProduct(){

  }
  addCartProduct(){

  }
}