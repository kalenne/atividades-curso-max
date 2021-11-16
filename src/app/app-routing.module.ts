import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { HomeComponent } from './pages/one/home/home.component';
import { SucessalertComponent } from './pages/one/sucessalert/sucessalert.component';
import { WarningalertComponent } from './pages/one/warningalert/warningalert.component';
import { ShowingUsernameComponent } from './pages/two/showing-username/showing-username.component';

const routes: Routes = [
  {
    path: "", 
    component: HomepageComponent
  },
  {
    path:"sucess",
    component: SucessalertComponent
  },
  {
    path: "warning",
    component: WarningalertComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "showingusername",
    component: ShowingUsernameComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
