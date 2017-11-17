import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { User } from './user/user';
import { USERS } from './user/mock-users';

@Injectable()
export class UserService {

  getUsers(): Observable<User[]> {
    return of(USERS);
  }

  getUserById(id: number): Observable<User> {
    return of(USERS.find(hero => hero.id === id));
  }

  getUserByName(name: string): Observable<User> {
    return of(USERS.find(hero => hero.firstName === name));
  }

  constructor() { }

}
