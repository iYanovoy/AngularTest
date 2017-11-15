import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { User } from "./user";
import { USERS } from "./mock-users";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['../../reset.css', './user.component.css' ],
  encapsulation: ViewEncapsulation.None
})

export class UserComponent implements OnInit {

  selectedUser: User;
  users = USERS;

  onSelect(user: User): void {
    this.selectedUser = user;
  }

  constructor() { }

  ngOnInit() {

  }

}
