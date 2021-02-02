import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartupFormComponent } from './startup-form/startup-form.component';
import { HomeComponent } from './home/home.component';
import { StartupDetailsComponent } from './startup-details/startup-details.component';
import { StartupMoreDetailsComponent } from './startup-more-details/startup-more-details.component';


const routes: Routes = [
  { path: '',   redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home', component : HomeComponent

  },
  {
    path: 'startup-form', component : StartupFormComponent
  },
  {
    path: 'startup-details', component : StartupDetailsComponent
  },
  {
    path: 'startupInfo/:id', component : StartupMoreDetailsComponent
  }, 
  // { path: '**', component:  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
