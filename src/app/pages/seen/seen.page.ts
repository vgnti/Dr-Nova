import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent, NavigationEnd  } from '@angular/router';

@Component({
  selector: 'app-seen',
  templateUrl: 'seen.page.html',
  styleUrls: ['seen.page.scss']
})

export class SeenPage implements OnInit {

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
