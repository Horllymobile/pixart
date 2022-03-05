import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { FirebaseError } from 'firebase/app';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
  }

  async guest() {
    await this.authService.guest();
    this.router.navigateByUrl('/tabs/home');
  }

  async signUpWithGoogle() {
    await this.authService.loginWithGoogle();
    this.router.navigateByUrl('/tabs/home');
  }
}
