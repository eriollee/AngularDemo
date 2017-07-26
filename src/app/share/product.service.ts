import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

	private products:Product[] =[
  		new Product(1,"第一个商品",1.99,3.5,"这是一个商品描述32424322423",["电子产品","硬件设备"]),
  		new Product(2,"第二个商品",2.99,2.5,"这是一个商品描述32424322423",["硬件设备"]),
  		new Product(3,"第三个商品",1.39,1.5,"这是一个商品描述32424322423",["电子感应","硬件设备"]),
  		new Product(4,"第四个商品",1.99,1.5,"这是一个商品描述32424322423",["电子产品"]),
  		new Product(5,"第五个商品",1.99,1.5,"这是一个商品描述32424322423",["电子产品","硬件设备"]),
  	];

  	private comments:Comment[]=[
  		new Comment(1,1,"2014-02-02 22:22:22","张三",3.5,"不错"),
  		new Comment(2,1,"2018-02-02 23:22:22","李四",1.5,"啊啊不错"),
  		new Comment(3,1,"2017-02-02 11:22:22","张三",4.5,"版本不错"),
  		new Comment(1,2,"2014-02-02 22:22:22","王五",2.0,"不错"),
  		new Comment(2,2,"2014-02-02 22:22:22","小明",3.5,"不错"),
  		new Comment(1,3,"2014-02-02 22:22:22","小王",3.5,"不错"),
  		new Comment(2,3,"2014-02-02 22:22:22","张三",3.5,"不错"),
  	 ]

  constructor() { }

  getProducts():Product[]{
  	return this.products;
  }

  getProductId(id:number):Product{
  	return this.products.find((product)=>product.id==id);

  }

  getCommentsForProductId(id:number):Comment[]{
  	return this.comments.filter((comment:Comment)=>comment.productId==id);
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