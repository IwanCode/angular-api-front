import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { CatalogueComponent } from './pages/catalogue/catalogue.component';
import { DiscountNewsComponent } from './pages/discount-news/discount-news.component';
import { NotFoundComponent } from './static/not-found/not-found.component';
import { Breadcrumb } from './components/breadcrumbs/breadCrumb';
import {BreadcrumbProvider} from "./providers/breadcrumb";

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'store',
    component: CatalogueComponent
  },
  {
    path: 'sale',
    component: CatalogueComponent
  },
  {
    path: 'discount-news',
    component: DiscountNewsComponent,
    data: {
      breadcrumbs: [
        new Breadcrumb("Главная", "/"),
        new Breadcrumb("Акции", "/discount-news")
      ]
    }
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes)
  ],
  exports: [
      RouterModule
  ],
  providers: [BreadcrumbProvider],
})
export class AppRoutingModule { }
