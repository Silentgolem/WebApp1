import { Component } from '@angular/core';
import { IProduct } from './product';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent {
  pageTitle: string = "Joe's Products";
  showImages: boolean = false;
  imageWidth:number=50;
  imageMargin:number=2;
  _listFilter:string="";
  get listFilter():string
  {
    return this._listFilter;
  }
  set listFilter(value:string)
  {
    this._listFilter=value;
    this.filteredProducts=this.listFilter ? this.filterProducts(this.listFilter):this.products;
  }
  filteredProducts: IProduct[];
  products: IProduct[] =
  [
    {
      'productId': 2,
      'productName': 'Garden Cart',
      'productCode': 'GDN-0023',
      'releaseDate': 'March 18, 2016',
      'description': '15 gallon capacity rolling grarden cart',
      'price': 32.99,
      'starRating': 4.2,
      'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png'
    },
    {
      'productId': 5,
      'productName': 'Hammer',
      'productCode': 'TBX-0048',
      'releaseDate': 'May 20, 2016',
      'description': 'Curved claw steel hammer',
      'price': 8.99,
      'starRating': 4.8,
      'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png'
    }
  ]

  constructor()
  {
    this.filteredProducts=this.products;
  }

  ToggleImage() {
    this.showImages = !this.showImages;
  }
  filterProducts(value:string):IProduct[]
  {
    value=value.toLocaleLowerCase();
    return this.products.filter((product:IProduct)=>product.productName.toLocaleLowerCase().indexOf(value)!= -1);
  }
}
