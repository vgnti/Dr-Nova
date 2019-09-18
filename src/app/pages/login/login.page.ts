import { Component, OnInit } from '@angular/core';
import { MenuController, LoadingController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  loginForm: FormGroup;
  loading: any;
  
  constructor(
    public alertController: AlertController,
		public loadingController: LoadingController,
		private router: Router,
		public formBuilder: FormBuilder,
		private menuCtrl: MenuController,
  ) {
		this.loginForm = formBuilder.group({
			email: ['demo@gmail.com',Validators.compose([Validators.required, Validators.email])],
			password: ['123456',Validators.compose([Validators.minLength(6), Validators.required])]
		});
	}

	ngOnInit() {
		this.menuCtrl.enable(false);
	}

	loginUser(): void {
		this.router.navigate(['menu/tabs']);
    }

  openSignup(): void {
   	this.router.navigate(['signup']);
  }

  openForgotPwd(): void {
   	this.router.navigate(['forgot']);
  }

}
