import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../productlist/product';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

  constructor(private http:Http) { }

  getProducts(): any {
    console.log(this.http.get('http://localhost:3000/products').map((res:Response)=>res.json));
    return this.http.get('http://localhost:3000/products').map((res:Response)=>res.json);
  }

}
