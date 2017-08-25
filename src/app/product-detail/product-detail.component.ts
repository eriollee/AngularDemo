import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { Product,Comment } from '../share/product.service';
import { ProductService } from '../share/product.service';
import { WebSocketService } from '../share/web-socket.service';
import { Subscription } from 'rxjs/Rx';

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

  isWatched:boolean = false; 

  currentBid:number ;

  subscription:Subscription;



  constructor(private routeInfo:ActivatedRoute,
              private productService:ProductService,
              private wsService:WebSocketService) { }

  ngOnInit() {
  	let productId:number = this.routeInfo.snapshot.params["prodId"];

    this.productService.getProductId(productId).subscribe(
        product => {
          this.product = product;
          this.currentBid = product.price;
        }
     );
    this.productService.getCommentsForProductId(productId).subscribe(
        comments => this.comments = comments
     );
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

  watchProduct(){
     
     if(this.subscription){
       this.subscription.unsubscribe();
       this.isWatched = false;
       this.subscription = null;
     }else{
       this.isWatched = true;
       this.subscription = this.wsService.createObservableSocket("ws://localhost:8085",this.product.id)
     .subscribe(

       (message)=>{            
           let product = message.find(p => p.productId === this.product.id);
           this.currentBid = product.bid;}
      );
     }

  }


}
