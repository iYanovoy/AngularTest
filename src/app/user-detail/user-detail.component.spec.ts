import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailComponent } from './user-detail.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {RouterModule} from '@angular/router';
import {UserService} from '../user.service';
import {UserListComponent} from '../user-list/user-list.component';
import {UserComponent} from '../user/user.component';
import {AppComponent} from '../app.component';
import {AppRoutingModule} from '../app-routing.module';
import {AuthorizationComponent} from '../authorization/authorization.component';
import {NotFoundComponent} from '../not-found/not-found.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {APP_BASE_HREF} from '@angular/common';

describe('UserDetailComponent', () => {
  let component: UserDetailComponent;
  let fixture: ComponentFixture<UserDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      // declarations: [ UserDetailComponent ],
      // providers: [ActivatedRoute],
      // providers: [
      //         { provide: [ActivatedRoute, UserService] }
      //       ],
      // imports: [ActivatedRoute],
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
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
