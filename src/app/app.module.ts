import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarRatingComponent } from './shared/components/star-rating/star-rating.component';
import { HomeComponent } from './home/home/home.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { RouterModule } from '@angular/router';
import { ProductService } from './product/product.service';
import { ProductGuard } from './product/product.guard';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarRatingComponent,
    HomeComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'products', component: ProductListComponent },
      {path: 'products/:id', canActivate: [ProductGuard], component: ProductDetailComponent },
      {path: 'home', component: HomeComponent },
      {path: '', redirectTo: 'home', pathMatch:'full' },
      {path: '**', redirectTo: 'home', pathMatch:'full' }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
