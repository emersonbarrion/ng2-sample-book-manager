import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MD_ICON_DIRECTIVES, MdIconRegistry } from '@angular2-material/icon';

import { SideNavComponent } from './side-nav';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [MdIconRegistry],
  directives: [
    MD_TOOLBAR_DIRECTIVES,
    MD_BUTTON_DIRECTIVES,
    MD_SIDENAV_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MD_ICON_DIRECTIVES,
    ROUTER_DIRECTIVES,
    SideNavComponent
  ]
})
export class AppComponent {
  title = 'Book App';
  menus = [
    {
      icon: 'favorite',
      name: 'Favorites',
      description: 'Favorite books',
      route: '/favorites'
    },
    {
      icon: 'search',
      name: 'Search',
      description: 'Search books',
      route: '/'
    },
  ];
}
