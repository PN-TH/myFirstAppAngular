import { Component, OnInit } from '@angular/core';
import { Mail } from 'src/app/sign-up/mail';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  mail: Mail = {
    name: 'Thomas',
    email: ''
    
  };
  constructor() { }

  ngOnInit() {
  }

}
