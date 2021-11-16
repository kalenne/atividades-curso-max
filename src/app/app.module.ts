import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WarningalertComponent } from './pages/one/warningalert/warningalert.component';
import { SucessalertComponent } from './pages/one/sucessalert/sucessalert.component';
import { HomeComponent } from './pages/one/home/home.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ShowingUsernameComponent } from './pages/two/showing-username/showing-username.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WarningalertComponent,
    SucessalertComponent,
    HomeComponent,
    HomepageComponent,
    ShowingUsernameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
