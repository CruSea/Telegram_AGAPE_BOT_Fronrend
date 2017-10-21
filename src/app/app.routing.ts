import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FullLayout, SimpleLayout} from './containers';

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: FullLayout,
    children: [
      {
        path: 'home',
        loadChildren: './agape-page/agape-page.module#AgapePageModule'
      }
    ]
  },
  {
    path: '',
    component: SimpleLayout,
    children: [
      {
        path: 'auth',
        loadChildren: './agape-auth/agape-auth.module#AgapeAuthModule'
      }
    ]
  }
];
