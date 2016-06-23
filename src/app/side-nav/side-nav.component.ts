import { Component, OnInit, Input } from '@angular/core';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MD_ICON_DIRECTIVES, MdIconRegistry } from '@angular2-material/icon';

@Component({
  moduleId: module.id,
  selector: 'app-side-nav', 
  templateUrl: 'side-nav.component.html',
  styleUrls: ['side-nav.component.css'],
  providers: [MdIconRegistry],
  directives: [
    MD_SIDENAV_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MD_ICON_DIRECTIVES
  ]
})
export class SideNavComponent implements OnInit {
  @Input() menus;

  constructor() {}

  ngOnInit() {
  }

}
