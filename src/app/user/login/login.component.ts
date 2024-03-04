import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  credentials = {
    email: '',
    password: '',
  }

  showAlert = false;
  alertMsg = "Please wait... login in progress."
  alertColor = 'blue'
  inSubmission = false;

  async login() {
    this.showAlert = true;
    this.alertMsg = "Please wait... login in progress."
    this.alertColor = 'blue'
    this.inSubmission = true;

    try {
      await this.auth.signInWithEmailAndPassword(
        this.credentials.email,
        this.credentials.password
      )
    } catch(e) {
      this.inSubmission = false;
      this.alertMsg = " an error occurred. Please try again."
      this.alertColor = 'red';
      console.log(e);
      return
    }
    this.alertMsg = "Login successful. Redirecting..."
    this.alertColor = 'green';
  }

  constructor (private auth: AngularFireAuth) { }

  ngOnInit(): void {
  }

}
