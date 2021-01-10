import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/services/login/login.service';

interface MenuItem {
  isSelected: boolean;
  link: string;
  title: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {
  menuItems: MenuItem[];

  constructor(private loginService: LoginService) {}

  ngOnInit() {
    this.menuItems = [
      {
        isSelected: true,
        link: 'home',
        title: 'Home',
      },
      {
        isSelected: false,
        link: 'users',
        title: 'Usuários',
      },
      {
        isSelected: false,
        link: 'photos',
        title: 'Fotos',
      },
    ];
  }

  onLogout() {
    this.loginService.logout();
  }

  changeActiveMenu(item: MenuItem) {
    this.clearActivesMenus();
    item.isSelected = true;
  }

  private clearActivesMenus() {
    this.menuItems.forEach((i) => (i.isSelected = false));
  }
}
