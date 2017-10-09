import { ProductService } from '../shared/product.service';
import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  pageTitle: string = "Joe's Products";
  showImages: boolean = false;
  imageWidth: number = 50;
  imageMargin: number = 2;
  _listFilter: string = "";
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.filterProducts(this.listFilter) : this.products;
  }
  filteredProducts: IProduct[];
  products: IProduct[];


  constructor(private _productService: ProductService) {
  }

  ToggleImage() {
    this.showImages = !this.showImages;
  }
  filterProducts(value: string): IProduct[] {
    value = value.toLocaleLowerCase();
    return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(value) != -1);
  }

  public ngOnInit(): void {
    this.products = this._productService.getProducts();
    this.filteredProducts = this.products;
  }
}
