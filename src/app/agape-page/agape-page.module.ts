import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import {RouterModule} from "@angular/router";
import {PageRoutes} from "./agape-page.routes";
import {FormsModule} from "@angular/forms";
import { BotMenusComponent } from './bot-menus/bot-menus.component';
import { BotContentsComponent } from './bot-contents/bot-contents.component';
import { BotSubMenusComponent } from './bot-sub-menus/bot-sub-menus.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PageRoutes),
    FormsModule
  ],
  declarations: [DashboardComponent, UsersComponent, BotMenusComponent, BotContentsComponent, BotSubMenusComponent]
})
export class AgapePageModule { }
