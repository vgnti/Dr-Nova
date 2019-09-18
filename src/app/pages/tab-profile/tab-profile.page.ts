import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { AlertController, PopoverController } from '@ionic/angular';

import { PopoverViewComponent } from '../../component/popover-view/popover-view.component';

@Component({
  selector: 'app-tab-profile',
  templateUrl: 'tab-profile.page.html',
  styleUrls: ['tab-profile.page.scss']
})
export class TabProfilePage {

	slideProfileOpts = {
	    effect: 'flip',
	    autoHeight: true,
	    speed: 1000,
    	spaceBetween: 15,
	    loop: true,
	    autoplay: {
    		delay: 5000,
  		},
  		slidesPerView: 4,
	};

	constructor(
		public popoverController: PopoverController,
		public alertController: AlertController,
		private router: Router,
	) {}

	toPresentPopover(params){
		this.presentPopover(params);
	}

	async presentPopover(ev: any) {
	    const popover = await this.popoverController.create({
	      	component: PopoverViewComponent,
	      	event: ev,
	      	translucent: true
	    });
	    return await popover.present();
	}

}
