import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

import { IProduct } from "../product";
import { ProductService } from '../product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  page_title: string;
  product: IProduct | undefined;
  error_message:string;

  constructor(private route: ActivatedRoute,
    private product_service:ProductService,
    private router: Router) {
   }

  ngOnInit(): void {
    let param = +this.route.snapshot.paramMap.get('id');
    if(param){
      const id = param;
      this.get_product(id);
    }

  }


  get_product(id: number) {
    this.product_service.get_product(id).subscribe(
      product => this.product = product,
      error => this.error_message = <any>error
    )
  }

  on_back():void{
    this.router.navigate(['/products']);
  }
     

}
