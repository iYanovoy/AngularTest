import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { User } from './user';
import { USERS } from './mock-users';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['../../reset.css', './user.component.css' ],
  encapsulation: ViewEncapsulation.None
})

export class UserComponent implements OnInit {

  selectedUser: User;
  users: User[];

  // onSelect(user: User): void {
  //   this.selectedUser = user;
  // }

  getUsers(): void {
    this.userService.getUsers().subscribe(users => this.users = users);
  }

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

}
