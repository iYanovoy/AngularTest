import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";

import { User } from "./user/user";
import { USERS } from "./user/mock-users";
import { MessageService } from "./messages/message.service";

@Injectable()
export class UserService {

  getUsers(): Observable<User[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(USERS);
  }

  constructor(private messageService: MessageService) { }

}
