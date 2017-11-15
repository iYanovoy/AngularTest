import { Injectable } from '@angular/core';

import { User } from "./user/user";
import { USERS } from "./user/mock-users";

@Injectable()
export class UserService {

  getUsers(): User[] {
    return USERS;
  }

  constructor() { }

}
