import { Component, OnInit } from '@angular/core';
import { ProductService,Product } from '../share/product.service';
import { FormControl} from '@angular/forms';
import { Observable } from 'rxjs/Rx';

import 'rxjs/Rx'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private products:Observable<Product[]>;
  private imgUrl = 'http://placehold.it/320x150';

 

  constructor(private productSerice:ProductService) { 
  
  }

  ngOnInit() {
    this.products = this.productSerice.getProducts();

    this.productSerice.searchEvent.subscribe(
      params => this.products = this.productSerice.search(params)
    );
  }

}

