import {Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {UsersComponent} from "./users/users.component";
import {BotMenusComponent} from "./bot-menus/bot-menus.component";
import {BotContentsComponent} from "./bot-contents/bot-contents.component";
import {BotSubMenusComponent} from "./bot-sub-menus/bot-sub-menus.component";

export const PageRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'dashboard',
      component: DashboardComponent,
      data: {
        title: 'Dashboard'
      },
    }]
  },
  {
    path: '',
    children: [{
      path: 'bot-menus',
      component: BotMenusComponent,
      data: {
        title: 'BOT Menus Builder'
      },
    }]
  },
  {
    path: '',
    children: [{
      path: 'bot-contents',
      component: BotContentsComponent,
      data: {
        title: 'BOT Contents'
      },
    }]
  },
  {
    path: '',
    children: [{
      path: 'bot-sub-menu',
      component: BotSubMenusComponent,
      data: {
        title: 'BOT Sub Menus'
      },
    }]
  },
  {
    path: '',
    children: [{
      path: 'users',
      component: UsersComponent,
      data: {
        title: 'Users'
      },
    }]
  },
];
