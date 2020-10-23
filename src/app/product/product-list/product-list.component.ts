import { Component, OnInit } from '@angular/core';

import { IProduct } from "../product"
import { ProductService } from '../product.service';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  page_title: string = "Product List"
  image_width: number = 50;
  image_margin: number = 2;
  show_image: boolean = false;
  
  error_message: string;
 
  _list_filter: string;

  get list_filter():string {
    return this._list_filter;
  }

  set list_filter(value:string){
    this._list_filter = value;
    this.filtered_products = this.list_filter ? this.perform_filter(this.list_filter) : this.products
  }


  filtered_products: IProduct[];
  products: IProduct[] = []

  constructor(private product_service:ProductService) { }

  ngOnInit(): void {
    this.product_service.get_products().subscribe({
      next:products => {
        this.products = products;
        this.filtered_products = this.products;

      },
      error:err => this.error_message = err
    });
    

  }

  perform_filter(filterBy: string):IProduct[]{
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct)=> product.product_name.toLocaleLowerCase().indexOf(filterBy) !== -1)
  }

  toggle_image():void{
    this.show_image = !this.show_image;
  }

  on_rating_clicked(message: string):void{
    this.page_title = 'Product list:' + message;

  }

}
