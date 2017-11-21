import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterModule, Router, ActivatedRoute} from '@angular/router';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

import {AuthorizationComponent} from './authorization.component';
import {UserService} from '../user.service';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {of} from 'rxjs/observable/of';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {User} from '../user/user';


describe('AuthorizationComponent', () => {
  // const component: AuthorizationComponent;
  // const fixture: ComponentFixture<AuthorizationComponent>;
  // let data: BehaviorSubject<string>;
  const route = {
    snapshot: {
      snapshot: {
        root: {
          firstChild: {params: {id: 11}}
        }
      }
    }
  };

  // let component: AuthorizationComponent;
  // let fixture: ComponentFixture<AuthorizationComponent>;
  const userService = new UserService;
  const fb = new FormBuilder();

  const auth = new AuthorizationComponent(userService, <any>route, fb);

  // beforeEach(async(() => {
    // data = of({
    //     name: 'Petro'
    // });
  // }));

  // beforeEach(() => {
  // });

  // Isolated tests

  it('set username', () => {
    // expect(auth).toBeTruthy();

    auth.userForm.setValue({
      name: 'Username'
    });

    expect(auth.userForm.value.name).toEqual('Username');
  });

  it('valid username', ( ) => {
    auth.userForm.setValue({
      name: 'Stas'
    });

    expect(auth.userForm.status).toEqual('VALID');
  });

  it('invalid username', ( ) => {
    auth.userForm.setValue({
      name: '12345'
    });

    expect(auth.userForm.status).toEqual('INVALID');
  });


  // Shallow tests

  // TestBed.configureTestingModule({
  //   declarations: [AuthorizationComponent],
  //   providers: [
  //     { provide: ActivatedRoute }
  //   ],
  //   // Tells the compiler not to error on unknown elements and attributes
  //   schemas: [NO_ERRORS_SCHEMA]
  // });
  // TestBed.compileComponents();
  //
  // it('Update username and read status', () => {
  //   const f = TestBed.createComponent(AuthorizationComponent);
  //   f.detectChanges();
  //
  //   expect(f.debugElement.nativeElement).toContain('Please, enter your name');
      // .toHaveText('Please, enter your name');

    // expect().toEqual();
  // });


  // Integration Tests

  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [AuthorizationComponent],
  //     // providers: [
  //     //   { provide: [UserService, ActivatedRoute, FormBuilder] }
  //     // ],
  //     imports: [UserService],
  //     // Tells the compiler not to error on unknown elements and attributes
  //     schemas: [NO_ERRORS_SCHEMA]
  //   })
  //     .compileComponents();
  // }));
  //
  // beforeEach(() => {
  //   fixture = TestBed.createComponent(AuthorizationComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });
  //
  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
