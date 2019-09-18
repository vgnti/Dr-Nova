import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-regd',
  templateUrl: 'regd.page.html',
  styleUrls: ['regd.page.scss']
})
export class RegdPage implements OnInit {

	OpemrSettingsPath: string;
  
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
