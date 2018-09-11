import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {Discount} from "./discount";
import {tap} from "rxjs/operators";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()

export class DiscountService {
  private baseUrl = environment.appUrl;
  private discountNewsUrl = 'v1/discount-news';  // URL discount news list

  constructor(
      private http: HttpClient
  ) { }

  getDiscounts(): Observable<Discount[]> {
    const url = `${this.baseUrl}/${this.discountNewsUrl}`;

    return this.http.get<Discount[]>(url)
        .pipe(
            tap(heroes => console.log(`fetch menu`))
        );
  }
}
