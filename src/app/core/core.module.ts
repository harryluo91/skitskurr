import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { RouterModule }   from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { SideNavBarComponent } from './side-nav-bar/side-nav-bar.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
  ],
  declarations: [HeaderComponent, SideNavBarComponent],
  exports: [HeaderComponent, SideNavBarComponent],
})
export class CoreModule { }
