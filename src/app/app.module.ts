import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DogesComponent } from './doges/doges.component';
import { FormsModule } from '@angular/forms';
import { DogeDetailComponent } from './doge-detail/doge-detail.component';
import {DogeService} from './doge.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    DogesComponent,
    DogeDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [DogeService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
