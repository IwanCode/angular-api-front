import { Component, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.sass']
})
export class MainPageComponent implements OnInit {
  private images: any[] = [];

  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.getMainBanners();
  }

  getMainBanners(): void {

    this.mainService.getMedia('main?like=1')
        .subscribe(banners => this.images = banners);
  }

}
