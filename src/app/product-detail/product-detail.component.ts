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

  newRating:number=5;

  newComment:string = "";

  isCommentHidden = true; 


  constructor(private routeInfo:ActivatedRoute,private productService:ProductService) { }

  ngOnInit() {
  	let productId:number = this.routeInfo.snapshot.params["prodId"];
  	this.product = this.productService.getProductId(productId);
  	this.comments = this.productService.getCommentsForProductId(productId);
  }

  
  addComment(){
    let comment = new Comment(0,this.product.id,new Date().toISOString(),"Eriollee",this.newRating,this.newComment);
    this.comments.unshift(comment);  
    /*恢复默认值*/
    this.newComment =null;
    this.newRating = 5;
    this.isCommentHidden = true;

    /*计算平均值*/
    let sum = this.comments.reduce((sum,comment)=>sum+comment.rating,0);
    this.product.rating = sum / this.comments.length;
  }


}
