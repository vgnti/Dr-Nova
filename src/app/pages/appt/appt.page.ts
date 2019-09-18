import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';
import { NavController } from '@ionic/angular';
import { environment } from '../../../environments/environment';

@Component({
	selector: 'app-appt',
	templateUrl: 'appt.page.html',
	styleUrls: ['appt.page.scss']
})

export class ApptPage implements OnInit {

	OpemrSettingsPath : string;
  
	constructor(private router: Router) {
	  this.router.events.subscribe((event: RouterEvent) => {
		if (event && event instanceof NavigationEnd && event.url) {
		  this.OpemrSettingsPath = event.url + '/opemr-settings';
		}
	  });
	}
	
	ngOnInit() {
	}


}
