import { IonicModule } from '@ionic/angular';
import { Routes, RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SeenPage } from './seen.page';
import { ParallaxCommonModule } from '../../common/parallax/parallax.module';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: SeenPage
      },
      {
        path: 'opemr-settings',
        loadChildren: '../opemr/opemr.module#OpemrPageModule'
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
    SeenPage,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SeenPageModule {}
