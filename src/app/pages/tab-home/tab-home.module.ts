import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabHomePage } from './tab-home.page';
import { ParallaxCommonModule } from '../../common/parallax/parallax.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ParallaxCommonModule,
    FontAwesomeModule,
    RouterModule.forChild([{ path: '', component: TabHomePage }]),
  ],
  declarations: [TabHomePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TabHomePageModule {}
