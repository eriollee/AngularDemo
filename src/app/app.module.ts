import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductComponent } from './product/product.component';
import { SearchComponent } from './search/search.component';
import { StarsComponent } from './stars/stars.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HomeComponent } from './home/home.component';
import {Routes,RouterModule} from "@angular/router";
import { ProductService } from './share/product.service';
import { WebSocketService } from './share/web-socket.service';
import { FilterPipe } from './pipe/filter.pipe';

const routeConfig:Routes = [
  {path:'',component:HomeComponent},
  {path:'product/:prodId',component:ProductDetailComponent},
  ]
  
@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    CarouselComponent,
    FooterComponent,
    NavbarComponent,
    ProductComponent,
    SearchComponent,
    StarsComponent,
    ProductDetailComponent,
    HomeComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routeConfig),
    ReactiveFormsModule
  ],
  providers: [ProductService,WebSocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
