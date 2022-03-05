import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../core/services/auth.service';
import { FirebaseError } from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  get loginFormData() {
    return this.loginForm.controls;
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]]
    });
  }

  loginWithEmail() {
    this.authService.login({ email: this.loginFormData.email.value, password: this.loginFormData.password.value })
    .then((res) => {
      this.router.navigateByUrl('/tabs/home');
    })
    .catch((err: FirebaseError) => {
      console.log(err.message);
    });
  }

  async guest() {
    await this.authService.guest();
    this.router.navigateByUrl('/tabs/home');
  }

  async loginWithGoogle() {
    await this.authService.loginWithGoogle();
    this.router.navigateByUrl('/tabs/home');
  }
}
