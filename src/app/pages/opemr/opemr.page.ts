import { Component,  OnInit  } from '@angular/core';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
	selector: 'app-opemr',
	templateUrl: 'opemr.page.html',
	styleUrls: ['opemr.page.scss']
})

export class OpemrPage implements OnInit {

	PpSettingsPath  : string;
	VsSettingsPath  : string;
	FshSettingsPath : string;
	AdSettingsPath  : string;
	AmSettingsPath  : string;
	IsSettingsPath  : string;
	PnSettingsPath  : string;	
  
	constructor(private router: Router) {
	  this.router.events.subscribe((event: RouterEvent) => {
		if (event && event instanceof NavigationEnd && event.url) {
		  this.PpSettingsPath = event.url + '/pp-settings';
		}
		if (event && event instanceof NavigationEnd && event.url) {
			this.VsSettingsPath = event.url + '/vs-settings';
		}
		if (event && event instanceof NavigationEnd && event.url) {
			this.FshSettingsPath = event.url + '/fsh-settings';
		}
		if (event && event instanceof NavigationEnd && event.url) {
			this.AdSettingsPath = event.url + '/ad-settings';
		}
		if (event && event instanceof NavigationEnd && event.url) {
			this.AmSettingsPath = event.url + '/am-settings';
		}
		if (event && event instanceof NavigationEnd && event.url) {
			this.IsSettingsPath = event.url + '/is-settings';
		}
		if (event && event instanceof NavigationEnd && event.url) {
			this.PnSettingsPath = event.url + '/pn-settings';
		}							
	  });
	}

	ngOnInit() {

	}
}
