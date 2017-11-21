import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterModule, Router, ActivatedRoute} from '@angular/router';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

import {AuthorizationComponent} from './authorization.component';
import {UserService} from '../user.service';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {of} from 'rxjs/observable/of';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {User} from '../user/user';

import {UserListComponent} from '../user-list/user-list.component';
import {AppComponent} from '../app.component';
import {AppRoutingModule} from '../app-routing.module';
import {NotFoundComponent} from '../not-found/not-found.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {APP_BASE_HREF, HashLocationStrategy, LocationStrategy} from '@angular/common';
import {UserDetailComponent} from '../user-detail/user-detail.component';
import {UserComponent} from '../user/user.component';
import {ROUTER_PROVIDERS} from '@angular/router/src/router_module';
import {RouterTestingModule} from '@angular/router/testing';


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
  let f: ComponentFixture<AuthorizationComponent>;

  // Isolated tests

  it('set username', () => {
    // expect(auth).toBeTruthy();

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
      // declarations: [AuthorizationComponent],
      // providers: [
      //   { provide: ActivatedRoute }
      // ],
      // // Tells the compiler not to error on unknown elements and attributes
      // schemas: [NO_ERRORS_SCHEMA]
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
        // Location,
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
    // f.detectChanges();
    f.componentInstance.userForm.setValue({'name': 'Stas'});
    // f.debugElement.nativeElement.children[0][1].submit;
    // console.log(f.componentInstance.userForm.get('name').value);
    // console.log(f.componentInstance.userForm.setValue({'name': 'Stas'}));
    // console.log(f.componentInstance.userForm.controls.name.status);
  });

  it('submit and route to next page', () => {
    f.componentInstance.onSubmit();
    const copy = f.nativeElement.parentNode;
    console.log(copy);
    expect(f.componentInstance.userForm.value.name).toEqual('Stas');
  });
});
