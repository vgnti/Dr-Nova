import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-iemr',
  templateUrl: 'iemr.page.html',
  styleUrls: ['iemr.page.scss']
})
export class IemrPage {

	list_menu: any;
	parent_name: any;
	parent_path: any;
	index_menu: any;

	section: string = 'one';
	
	constructor(
		private router: Router,
		private route: ActivatedRoute,
	){
		console.log('IemrPage');
		this.route.params.subscribe(params => {
			this.index_menu = params.index;
			this.list_menu = environment.menu[this.index_menu].child;
			this.parent_name = environment.menu[this.index_menu].name;
			this.parent_path = environment.menu[this.index_menu].path;
		})
	}


	ngOnInit() {

	}
}
