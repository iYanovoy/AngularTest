import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthorizationComponent } from './authorization/authorization.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/authorization',
    pathMatch: 'full'

  },
  {
    path: 'authorization',
    component: AuthorizationComponent
  },
  {
    path: 'users',
    component: UserComponent
  },
  {
    path: 'user-list',
    component: UserListComponent
  },
  {
    path: 'detail/:id',
    component: UserDetailComponent
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
