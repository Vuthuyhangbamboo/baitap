import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { SlideComponent } from './slide/slide.component';
import { CategolyComponent } from './categoly/categoly.component';
import { AbcComponent } from './abc/abc.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ProductListComponent, ProductComponent, SlideComponent, CategolyComponent, AbcComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }