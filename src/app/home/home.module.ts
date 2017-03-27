import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { RouterModule }   from '@angular/router';
import { ChartsModule } from 'ng2-charts';

import { CoreModule } from '../core/core.module';

import { HomepageComponent } from './homepage/homepage.component';
import { OtherComponent } from './other/other.component';
import { GeneralTileComponent } from './tiles/general-tile/general-tile.component';
import { GeneralDetailsPageComponent } from './details-page/general-details-page/general-details-page.component';
import { GraphTileComponent } from './tiles/graph-tile/graph-tile.component';

@NgModule({
  imports: [
    BrowserModule,
    MaterialModule,
    CoreModule,
    RouterModule,
    ChartsModule,
  ],
  declarations: [HomepageComponent, OtherComponent, GeneralTileComponent, GeneralDetailsPageComponent, GraphTileComponent],
  exports: [GeneralTileComponent, GraphTileComponent],
})
export class HomeModule { }
