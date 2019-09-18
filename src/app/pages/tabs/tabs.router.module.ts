import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab-home',
        loadChildren: '../tab-home/tab-home.module#TabHomePageModule'
      },
      {
        path: 'tab-home/appt',
        loadChildren: '../appt/appt.module#ApptPageModule'
      }, 
      {
        path: 'tab-home/regd',
        loadChildren: '../regd/regd.module#RegdPageModule'
      },
      {
        path: 'tab-home/seen',
        loadChildren: '../seen/seen.module#SeenPageModule'
      },      
      {
        path: 'tab-home/kiv',
        loadChildren: '../kiv/kiv.module#KivPageModule'
      },
      {
        path: 'tab-home/iemr',
        loadChildren: '../iemr/iemr.module#IemrPageModule'
      }, 
      {
        path: 'tab-home/notfound',
        loadChildren: '../notfound/notfound.module#NotfoundComponentModule'
      },
      {
        path: 'tab-home/internal',
        loadChildren: '../internal/internal.module#InternalComponentModule'
      },
      {
        path: 'tab-home/notifications',
        loadChildren: '../notifications/notifications.module#NotificationsPageModule'
      },                         
      {
        path: 'tab-profile',
        loadChildren: '../tab-profile/tab-profile.module#TabProfilePageModule'
      },
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/tab-home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
