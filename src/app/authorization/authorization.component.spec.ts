import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterModule} from '@angular/router';
import {FormBuilder} from '@angular/forms';

import {AuthorizationComponent} from './authorization.component';
import {UserService} from '../user.service';
import {NO_ERRORS_SCHEMA} from '@angular/core';

import {UserListComponent} from '../user-list/user-list.component';
import {AppComponent} from '../app.component';
import {AppRoutingModule} from '../app-routing.module';
import {NotFoundComponent} from '../not-found/not-found.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {APP_BASE_HREF, HashLocationStrategy, LocationStrategy} from '@angular/common';
import {UserDetailComponent} from '../user-detail/user-detail.component';
import {UserComponent} from '../user/user.component';
import {RouterTestingModule} from '@angular/router/testing';


describe('AuthorizationComponent', () => {
  const route = {
    snapshot: {
      snapshot: {
        root: {
          firstChild: {params: {id: 11}}
        }
      }
    }
  };
  const userService = new UserService;
  const fb = new FormBuilder();
  const auth = new AuthorizationComponent(userService, <any>route, fb);
  let f: ComponentFixture<AuthorizationComponent>;

  // Isolated tests

  it('set username', () => {

    auth.userForm.setValue({
      name: 'Username'
    });

    expect(auth.userForm.value.name).toEqual('Username');
  });

  it('valid username', () => {
    auth.userForm.setValue({
      name: 'Stas'
    });

    expect(auth.userForm.status).toEqual('VALID');
  });

  it('invalid username', () => {
    auth.userForm.setValue({
      name: '12345'
    });

    expect(auth.userForm.status).toEqual('INVALID');
  });


  // Shallow tests

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
      providers: [UserService, {provide: APP_BASE_HREF, useValue: '/'}],
      schemas: [NO_ERRORS_SCHEMA]
    });
    TestBed.compileComponents();
  }));

  it('Update username and read status', () => {
    f = TestBed.createComponent(AuthorizationComponent);
    // console.log('first value = ' + f.componentInstance.userForm.value.name);
    f.detectChanges();
    f.componentInstance.userForm.value.name = 'Stepan';

    // console.log('last value = ' + f.componentInstance.userForm.value.name);

    expect(f.componentInstance.userForm.value.name)
      .toEqual('Stepan');
  });

  // Integration Tests

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
        RouterTestingModule,
        ReactiveFormsModule,
        LocationStrategy,
        HashLocationStrategy,
      ],
      providers: [UserService, {provide: APP_BASE_HREF, useValue: '/'}, {
        provide: LocationStrategy,
        useClass: HashLocationStrategy
      }],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    f = TestBed.createComponent(AuthorizationComponent);
    f.detectChanges();
    f.componentInstance.userForm.value.name = 'Stas';
    f.detectChanges();
    // console.log('last value = ' + f.componentInstance.userForm.value.name);
    f.detectChanges();
    // f.componentInstance.userForm.controls.name.status = 'VALID';
    f.componentInstance.userForm.setValue({'name': 'Stas'});
    // console.log(f.componentInstance.userForm.get('name').value);
    // console.log(f.componentInstance.userForm.controls.name.status);
  });

  it('submit and route to next page', () => {
    f.componentInstance.onSubmit();
    const copy = f.nativeElement.parentNode;
    let ref: string;
    setTimeout(() => {
      ref = copy.childNodes[0].baseURI;
      console.log(ref);
      expect(ref).toEqual('http://localhost:9876/users');
    }, 1000);
    // f.componentInstance.userForm.value.name
  });
});
