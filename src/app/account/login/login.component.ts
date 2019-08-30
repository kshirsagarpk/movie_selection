import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Shared/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  formSubmitAttempt = false;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { 
    this.loginForm = this.buildForm(this.formBuilder);
  }

  ngOnInit() {
  }

  buildForm = (formBuilder: FormBuilder): FormGroup =>
    formBuilder.group({
      mobileNo: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });

  hasError = (field: string, errorName: string): boolean =>
    this.loginForm.get(field).errors ? this.loginForm.get(field).errors[errorName] : false;

  isFieldValid = (field: string): boolean =>
    this.loginForm.get(field).invalid && (this.formSubmitAttempt || this.loginForm.get(field).touched)

  onSubmit() {
    this.formSubmitAttempt = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    const isUserValid = this.userService.isValid(this.loginForm.value.mobileNo, this.loginForm.value.password);

    if(!isUserValid){
      console.log('login data:'+ this.loginForm.value);
      alert('Mobile no or password is incorrect!');
    } else{
      this.router.navigate(['/movie/theatre']);
    }
  }

}
