import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginModel } from '../modules/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: LoginModel = new LoginModel();
  loginForm!: FormGroup;
  hide = true;
  form!: FormGroup;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private fb: FormBuilder
  ) {  
  }
  ngOnInit() {
    this.loginForm = this.fb.group({
      'email': [this.user.email, [
        Validators.required,
        Validators.email,
        Validators.maxLength(60)
      ]],
      'password': [this.user.password, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ]]
    });
  }

  onLoginSubmit() {
    // alert(this.user.email + ' ' + this.user.password);
    this.router.navigateByUrl('/dashboard');
    this.toastr.success('Successfully Logged in');
  }
  onRegistered(){
    this.router.navigateByUrl('/signup');
  }
}
