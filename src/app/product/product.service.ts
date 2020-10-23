import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { map } from 'rxjs/operators';



import { IProduct } from "./product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private product_url ='api/products.json';

  constructor(private http: HttpClient) { }

  get_products():Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this.product_url)
    .pipe(tap(data=>console.log('All: ' + JSON.stringify(data)))
    ,catchError(this.handle_error));
  }

  get_product(id: number): Observable<IProduct | undefined> {
    return this.get_products()
      .pipe(
        map((products: IProduct[]) => products.find(p => p.product_id === id))
      );
  }


  private handle_error(err:HttpErrorResponse){
    let err_message = ''
    if(err.error instanceof ErrorEvent){
      //A client side error or network error occurred
      err_message = err.error.message;
    }else {
      //no response from the backend
      err_message = `server returned code: ${err.status} and the error message ${err.message}`
    }
    console.log(err_message);
    return throwError(err_message);
  }
}
