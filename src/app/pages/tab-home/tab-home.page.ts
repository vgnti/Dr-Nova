import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { NavController, Platform, Events } from 'ionic-angular';

@Component({
  selector: 'app-tab-home',
  templateUrl: 'tab-home.page.html',
  styleUrls: ['tab-home.page.scss']
})
export class TabHomePage {

	section: string = 'one';
	
	constructor( 
		private router: Router
	){}
	
}