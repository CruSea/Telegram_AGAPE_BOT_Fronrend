import {Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";

export const AuthRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'login',
      component: LoginComponent,
      data: {
        title: 'Login'
      },
    }]
  },
  {
    path: '',
    children: [{
      path: 'register',
      component: RegisterComponent,
      data: {
        title: 'Users'
      },
    }]
  },
];
