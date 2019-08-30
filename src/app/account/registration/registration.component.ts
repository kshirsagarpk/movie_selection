import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/Shared/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registraionForm: FormGroup;

  isRegisterSuccessfully = false;
  isMobileNoValid = true;
  formSubmitAttempt = false;


  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {
    this.registraionForm = this.buildForm(this.formBuilder);
  }

  ngOnInit() {
  }


  buildForm = (formBuilder: FormBuilder): FormGroup =>
    formBuilder.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      mobileNo: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });

  hasError = (field: string, errorName: string): boolean =>
    this.registraionForm.get(field).errors ? this.registraionForm.get(field).errors[errorName] : false;

  isFieldValid = (field: string): boolean =>
    this.registraionForm.get(field).invalid && (this.formSubmitAttempt || this.registraionForm.get(field).touched)

  onSubmit() {
    this.formSubmitAttempt = true;

    if (this.registraionForm.invalid) {
      return;
    }
     
    if(!this.userService.isMobileNoValid(this.registraionForm.value.mobileNo)){
      this.isMobileNoValid = false;

      return;
    }

    this.userService.save(this.registraionForm.value);

    this.isRegisterSuccessfully = true;
  }

}
