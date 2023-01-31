import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbThemeModule,
  NbLayoutModule,
  NbListModule,
  NbCardModule,
  NbInputModule,
  NbButtonModule,
  NbCheckboxModule,
  NbProgressBarModule,
  NbIconModule,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { TodolistComponent } from './todolist/todolist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyBMxDf_A0-iOfO1CUm9sI-Rk7KPgbQ-RRA',
  authDomain: 'tasktick-52e91.firebaseapp.com',
  projectId: 'tasktick-52e91',
  storageBucket: 'tasktick-52e91.appspot.com',
  messagingSenderId: '772996813588',
  appId: '1:772996813588:web:ae79404638e2e24e6f2801',
  measurementId: 'G-L3DK5P5F1J',
};

initializeApp(firebaseConfig);

@NgModule({
  declarations: [AppComponent, TodolistComponent, LoginComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'corporate' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbIconModule,
    NbListModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    FormsModule,
    ReactiveFormsModule,
    NbCheckboxModule,
    NbProgressBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
