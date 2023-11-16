import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { passwordMatchValidator } from 'src/app/shared/custom-validators';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component ({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit{

  name = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ])
  email = new FormControl('', [
    Validators.required,
    Validators.email,
  ])
  age = new FormControl('', [
    Validators.required,
    Validators.min(18),
    Validators.max(120)
  ])
  password = new FormControl('', [
    Validators.required,
    Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm),
  ])
  confirm_password = new FormControl('', [
    Validators.required,
  ])
  phoneNumber = new FormControl('', [
    Validators.required,
    Validators.minLength(12),
    Validators.maxLength(12),
  ])

  showAlert = false
  alertMessage = 'Please wait, your account is being created.'
  alertColor = 'blue'

  registerForm = new FormGroup({
    name: this.name,
    email: this.email,
    age: this.age,
    password: this.password,
    confirm_password: this.confirm_password,
    phoneNumber: this.phoneNumber,
  })
  // , {
  //   validators: passwordMatchValidator
  // });

  async register() {
    this.showAlert = true
    this.alertMessage = 'Please wait, your account is being created.'
    this.alertColor = 'blue'
    this.inSubmission = true

    const {email, password} = this.registerForm.value

    try {
      const userCred = await this.auth.createUserWithEmailAndPassword(
        email as string, password as string
      )
      console.log(userCred)
    } catch (e) {
      console.error(e)

      this.alertMessage = `An unexpected error occurred. Please try again later.`
      this.alertColor = 'red'
      this.inSubmission = false
      return
    }

    this.alertMessage = 'Your account has been created successfully.'
    this.alertColor = 'green'
    return
  }
  constructor (private auth: AngularFireAuth) {}

  inSubmission = false

  ngOnInit(): void {
  }

}
