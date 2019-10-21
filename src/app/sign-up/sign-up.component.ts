import { Component, OnInit } from '@angular/core';
import { Champs } from '../champs';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  
  model: Champs = new Champs();

  submitted = false;

  onSubmit() {
    this.submitted = true;
    console.log(this.model);
  }
  
  constructor() { }
  

  ngOnInit() {
  }

}
