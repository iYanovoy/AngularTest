import { Component, Input, OnInit } from '@angular/core';
import { RouterModule, Router } from "@angular/router";

import { User } from "../user/user";
import { UserService } from "../user.service";

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {

  constructor(private userService: UserService,
              private router: Router) {}

  user: User;
  @Input() userName: string;
  public authorizationComplete: boolean = true;

  ngOnInit() {
    this.userService.getUsers();
  }

  checkUser(userName: string): void {
    if (this.userService.getUserByName(userName).subscribe(user => this.userName == user.firstName)) {
    //   if(this.subscribe(user => this.userName == user.firstName)
    // ) {
      this.authorizationComplete == true;
      this.router.navigate(['/users']);
    }
  else
    {
      this.authorizationComplete == false;
    }
  // }
  }
}
