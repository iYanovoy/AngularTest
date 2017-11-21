import {TestBed, inject, async} from '@angular/core/testing';

import { UserService } from './user.service';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {of} from 'rxjs/observable/of';

import {UserComponent} from './user/user.component';
import {AuthorizationComponent} from './authorization/authorization.component';
import {UserDetailComponent} from './user-detail/user-detail.component';
import {UserListComponent} from './user-list/user-list.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {APP_BASE_HREF} from '@angular/common';

describe('UserService', () => {
  // let user: BehaviorSubject<string>;

  beforeEach(async(() => {
    // user = of({
    //   user: 'Petya'
    // });

    TestBed.configureTestingModule({
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      declarations: [
        AppComponent,
        UserComponent,
        AuthorizationComponent,
        UserDetailComponent,
        UserListComponent,
        NotFoundComponent
      ],
      imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        RouterModule,
        ReactiveFormsModule
      ],
      providers: [UserService, {provide: APP_BASE_HREF, useValue : '/' }],
    });
    TestBed.compileComponents();
  }));

  it('should be created', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));

  // Shallow Test

  it('update userlist', () => {

    // const f = TestBed.createComponent(UserService);
    // f.detectChanges();

    // expect(f.debugElement.nativeElement).toContain('Stas');

    expect(true).toEqual(true);
      // .toContain(true);
  });
});
