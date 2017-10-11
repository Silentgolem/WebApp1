import { Observable } from 'rxjs/Rx';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../productlist/product';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
  private productURL:string='http://localhost:3000/products';
  constructor(private http:HttpClient) { }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productURL)
    .do(data=>console.log('All: '+JSON.stringify(data)))
    .catch(this.handleError);
  }

  private handleError(err:HttpErrorResponse)
  {
    console.log(err.message);
    return Observable.throw(err.message);
  }
}