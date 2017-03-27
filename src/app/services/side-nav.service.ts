import { Injectable } from '@angular/core';

@Injectable()
export class SideNavService {

  private sideNavBar: any = null;

  constructor() {}

  setValue(val) {
      this.sideNavBar = val;
  }

  getValue() {
      return this.sideNavBar;
  }

}
