import { Component, OnInit } from '@angular/core';
import { RegisterModel } from '../modules/registered.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user: RegisterModel = new RegisterModel();
  registerForm!: FormGroup;
  hide = true;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService
    ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      'name': [this.user.name, [
        Validators.required
      ]],
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

  onRegisterSubmit() {
    this.router.navigateByUrl('/dashboard');
    this.toastr.success('Successfully Registered');
  }
}
