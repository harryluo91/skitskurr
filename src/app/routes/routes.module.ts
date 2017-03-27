import { NgModule } from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

import { HomeModule } from '../home/home.module';

import { HomepageComponent } from '../home/homepage/homepage.component';
import { GeneralDetailsPageComponent } from '../home//details-page/general-details-page/general-details-page.component';
import { OtherComponent } from '../home/other/other.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomepageComponent
  },
  {
    path: 'home/general',
    component: GeneralDetailsPageComponent
  },
  {
    path: 'other',
    component: OtherComponent
  },
  { 
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    HomeModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule,
  ]
})
export class RoutesModule { }
