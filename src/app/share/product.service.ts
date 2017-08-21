import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import 'rxjs/Rx' ;

@Injectable()
export class ProductService {


 
  constructor(private http:Http) { }

  getAllCategories():string[]{
    return ["图书","电子产品","硬件设备"];
  }

  getProducts():Observable<Product[]>{
  	return this.http.get("/api/products").map(res=>res.json());
  }

  getProductId(id:number):Observable<Product>{
  	return this.http.get("/api/product/"+id).map(res=>res.json());

  }

  getCommentsForProductId(id:number):Observable<Comment[]>{
  	return this.http.get("/api/product/"+id+"/comments").map(res=>res.json());;
  }

}

export class Product  {
	constructor(
		public id:number,
		public title:string,
		public price:number,
		public rating:number,
		public desc:string,
		public categoires:Array<string>
	){
		// code...
	}
}

export class Comment  {
	constructor(
		public id:number,
		public productId:number,
		public timestamp:string,
		public user:string,
		public rating:number,
		public content:string
	){
		// code...
	}
}