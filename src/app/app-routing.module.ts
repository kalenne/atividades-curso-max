import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SucessalertComponent } from './pages/sucessalert/sucessalert.component';
import { WarningalertComponent } from './pages/warningalert/warningalert.component';

const routes: Routes = [
  {
    path: "", 
    component: HomeComponent
  },
  {
    path:"sucess",
    component: SucessalertComponent
  },
  {
    path: "warning",
    component: WarningalertComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
