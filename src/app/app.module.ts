import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { SlideComponent } from './slide/slide.component';
import { CategolyComponent } from './categoly/categoly.component';
import { TableComponent } from './table/table.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ProductListComponent, ProductComponent, SlideComponent, CategolyComponent, TableComponent, ProductDetailComponent, AddProductComponent, AboutComponent, HomeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
