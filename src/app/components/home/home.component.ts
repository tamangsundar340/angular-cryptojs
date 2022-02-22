import { Component, OnInit } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.decryptData()
  }


  // decrypt function
  decryptData() {
    const eText = JSON.parse(localStorage.getItem('user-info')).toString()
    const decryptedText = CryptoJS.AES.decrypt(eText, 'mysecret_key');
    const decryptedData = JSON.parse(decryptedText.toString(CryptoJS.enc.Utf8));
    console.warn(decryptedData[0]) 
  }

}
