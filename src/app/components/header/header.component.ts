import { Component, OnInit } from '@angular/core';
import { Menu } from '../../services/mainMenu';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  mainMenu: Menu[] = [];
  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.getMainMenu();
  }

  getMainMenu(): void {

    this.mainService.getMenu('main')
        .subscribe(menu => this.mainMenu = menu);
  }

}
