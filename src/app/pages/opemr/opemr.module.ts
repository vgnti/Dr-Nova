import { IonicModule } from '@ionic/angular';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { OpemrPage } from './opemr.page';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: OpemrPage
      },
      {
        path: 'pp-settings',
        loadChildren: '../pp/pp.module#PpPageModule'
      },
      {
        path: 'vs-settings',
        loadChildren: '../vs/vs.module#VsPageModule'
      },
      {
        path: 'fsh-settings',
        loadChildren: '../fsh/fsh.module#FshPageModule'
      },
      {
        path: 'ad-settings',
        loadChildren: '../ad/ad.module#AdPageModule'
      },
      {
        path: 'am-settings',
        loadChildren: '../am/am.module#AmPageModule'
      },
      {
        path: 'is-settings',
        loadChildren: '../is/is.module#IsPageModule'
      } ,
      {
        path: 'pn-settings',
        loadChildren: '../pn/pn.module#PnPageModule'
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
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OpemrPage]
})
export class OpemrPageModule {}
