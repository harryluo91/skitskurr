import { Component, OnInit, ViewChild } from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  screenWidth: number;
  gridConfigs = {
    numCols: 4,
    colSpan: null,
    rowHeight: '300px',
  };

  setupGridDimensions(width) {
    if (width < 768) {
      this.gridConfigs.numCols = 1;
      this.gridConfigs.colSpan = 1;
    }
    if (width > 768) {
      this.gridConfigs.numCols = 4;
      this.gridConfigs.colSpan = null;
    }
  }

  onResize(event) {
    this.setupGridDimensions(event.target.innerWidth);
  }

  ngOnInit() {
    this.setupGridDimensions(window.innerWidth);
  }

}
