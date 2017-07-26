import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { Product,Comment } from '../share/product.service';
import { ProductService } from '../share/product.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product:Product;

  comments:Comment[];

  constructor(private routeInfo:ActivatedRoute,private productService:ProductService) { }

  ngOnInit() {
  	let productId:number = this.routeInfo.snapshot.params["prodId"];
  	this.product = this.productService.getProductId(productId);
  	this.comments = this.productService.getCommentsForProductId(productId);
  }


}
