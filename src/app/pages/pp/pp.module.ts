import { IonicModule } from '@ionic/angular';
import { Routes, RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PpPage } from './pp.page';
import { ParallaxCommonModule } from '../../common/parallax/parallax.module';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: PpPage
      },
      {
        path: 'opemr-settings',
        loadChildren: '../opemr/opemr.module#OpemrPageModule'
      },
      {
        path: 'notifications',
        loadChildren: '../notifications/notifications.module#NotificationsPageModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ParallaxCommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    PpPage,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PpPageModule {}
