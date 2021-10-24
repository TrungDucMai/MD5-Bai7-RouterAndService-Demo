import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {MyserviceService} from "./myservice.service";
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { TimelinesComponent } from './timelines/timelines.component';
import { RouterModule, Routes } from '@angular/router'

@NgModule({
  declarations: [
    AppComponent,
    NewCmpComponent,
    TimelinesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([])
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
