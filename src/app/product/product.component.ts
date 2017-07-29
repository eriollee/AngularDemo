import { Component, OnInit } from '@angular/core';
import { ProductService,Product } from '../share/product.service';
import { FormControl} from '@angular/forms';
import 'rxjs/Rx'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private products:Product[];
  private imgUrl = 'http://placehold.it/320x150';

  private keyword:string;

  private titleFilter:FormControl = new FormControl();

  constructor(private productSerice:ProductService) { 
    this.titleFilter.valueChanges
      .debounceTime(500)
      .subscribe(
      value =>this.keyword = value
    )
  }

  ngOnInit() {
    this.products = this.productSerice.getProducts();
  }

}

