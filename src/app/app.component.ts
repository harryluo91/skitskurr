import { Component, ViewChild } from '@angular/core';

import { SideNavService } from './services/side-nav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('sidenav') sideNav: any;

  constructor(public sideNavService: SideNavService){}

  ngAfterViewInit() {
    this.sideNavService.setValue(this.sideNav);
  }
  title = 'app works!';
}
