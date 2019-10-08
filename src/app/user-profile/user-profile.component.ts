import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: User = {
    lastname : 'Doe',
    firstName : 'John',
    age : 24,
    quote : '',
    photo : 'https://randomuser.me/api/portraits/lego/2.jpg'
  };

  constructor() { 
    
  }
  age: boolean = true;
  ngOnInit() {
  }

}
