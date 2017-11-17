import { Component, Input, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { FormGroup, FormBuilder,  Validators  } from '@angular/forms';

import { User } from '../user/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {

  constructor(private userService: UserService,
              private router: Router,
              private fb: FormBuilder) {
    this.createForm();
  }

  public authorizationComplete = true;
  userForm: FormGroup;
  user: User;
  @Input()
  userName: string;

  createForm() {
    this.userForm = this.fb.group({
      name: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.userService.getUsers();
  }

  onSubmit(): void {
    this.userName = this.userForm.get('name').value;
    if (this.userService.getUserByName(this.userName).subscribe(user => this.userName === user.firstName)) {
      this.authorizationComplete === true;
      this.router.navigate(['/users']);
    } else {
      this.authorizationComplete === false;
    }
  }

  // checkUser(userName: string): void {
  //   if (this.userService.getUserByName(userName).subscribe(user => this.userName === user.firstName)) {
  //     this.authorizationComplete === true;
  //     this.router.navigate(['/users']);
  //   } else {
  //     this.authorizationComplete === false;
  //   }
  // }
}
