import { Component } from '@angular/core';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent {
pageTitle:string="Joe's Products";
products:any[]=
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
}
