import { Component, OnInit, Input } from '@angular/core';

import { SideNavService } from '../../services/side-nav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(public sideNavService: SideNavService) {}

  toggleSideNavBar() {
    this.sideNavService.getValue().toggle();
  }

  ngOnInit() {
  }

  @Input()
  title: string;


}
