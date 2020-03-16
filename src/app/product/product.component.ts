import { Component, OnInit } from '@angular/core';
import {Product} from "../product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  product : Product ={
    name:"Item One",
    price:24.49,
    desc : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
    status: false
  }
  changeStatus(){
    this.product.status= true;
  }

  changeName(e){
    this.product.name=e.target.value;
  }


}