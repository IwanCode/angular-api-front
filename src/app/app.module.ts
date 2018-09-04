import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { CatalogueComponent } from './pages/catalogue/catalogue.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './static/not-found/not-found.component';
// Import library
import { OwlModule } from 'ngx-owl-carousel';
import { DiscountNewsComponent } from './pages/discount-news/discount-news.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPageComponent,
    CatalogueComponent,
    NotFoundComponent,
    DiscountNewsComponent,
    BreadcrumbsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    OwlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    console.log(environment);
    // getMenu
  }

}
