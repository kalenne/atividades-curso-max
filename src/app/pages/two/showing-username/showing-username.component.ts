import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showing-username',
  templateUrl: './showing-username.component.html',
  styleUrls: ['./showing-username.component.css']
})
export class ShowingUsernameComponent implements OnInit {

  username = '';

  constructor() { }

  ngOnInit(): void {
  }
  
  getUserName(){
    return this.username;
  }

  onClickUsername(){
    this.username = '';
  }

}
