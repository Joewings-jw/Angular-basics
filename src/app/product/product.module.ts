import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";

import { ProductGuard } from './product.guard';
import { SharedModule } from '../shared/shared/shared.module';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
  ],
  imports: [
    RouterModule.forChild([
      {path: 'products', component: ProductListComponent },
      {path: 'products/:id', canActivate: [ProductGuard], component: ProductDetailComponent },

    ]),
    SharedModule
  ]
})
export class ProductModule { }
