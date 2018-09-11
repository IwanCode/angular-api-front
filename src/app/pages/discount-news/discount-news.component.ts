import { Component, OnInit } from '@angular/core';
import {Discount} from "../../services/discount/discount";
import {DiscountService} from "../../services/discount/discount.service";

@Component({
  selector: 'app-discount-news',
  templateUrl: './discount-news.component.html',
  styleUrls: ['./discount-news.component.sass'],
  providers: [
      DiscountService
  ]
})

export class DiscountNewsComponent implements OnInit {
  discountList: Discount[] = [];

  constructor(
      private discountService: DiscountService
  ) { }


  ngOnInit() {
    this.getDiscountList();
  }

  getDiscountList(): void{
    this.discountService.getDiscounts()
        .subscribe(list => this.discountList = list);
  }

}
