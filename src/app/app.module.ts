import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
// for communicating with a remote server over HTTP
import { HttpClientModule } from '@angular/common/http';
//router module used for app level route
import {RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AllCountriesComponent } from './countries/all-countries/all-countries.component';
import { RestCountriesService } from './rest-countries.service';
import { CountriesModule } from './countries/countries.module';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
    
  ],
  imports: [
    BrowserModule,
    CountriesModule,
    MatButtonModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot ([
      {path:'home',component:HomeComponent, pathMatch: 'full'},
      {path:'', redirectTo:'home',pathMatch: 'full'},
      {path:'all-countries/:url',component:AllCountriesComponent}    

    ]),
  ],
  providers: [RestCountriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
