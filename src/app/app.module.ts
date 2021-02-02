import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StartupFormComponent } from './startup-form/startup-form.component';
import { HomeComponent } from './home/home.component';
import { StartupDetailsComponent } from './startup-details/startup-details.component';
import { StartupMoreDetailsComponent } from './startup-more-details/startup-more-details.component';


@NgModule({
  declarations: [
    AppComponent,
    StartupFormComponent,
    HomeComponent,
    StartupDetailsComponent,
    StartupMoreDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}