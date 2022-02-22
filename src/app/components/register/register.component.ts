import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {



  successMessage = "";
  data = []

  registerForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
  })

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    // push data 
    this.data.push(this.registerForm.value)

    // decrypt data
    const userinfo = CryptoJS.AES.encrypt(JSON.stringify(this.data), 'mysecret_key').toString()
    console.log("Encryption = ", userinfo)
    localStorage.setItem('user-info', JSON.stringify(userinfo))

    // reset form and set message
    this.successMessage = "Data has been saved in local storage"
    this.registerForm.reset()
  }

}
