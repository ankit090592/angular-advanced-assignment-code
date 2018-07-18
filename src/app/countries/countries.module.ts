import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCountriesComponent } from './all-countries/all-countries.component';
import { SingleCountryComponent } from './single-country/single-country.component';
import { RouterModule } from '../../../node_modules/@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'single-country/:url', component: SingleCountryComponent }
    ]),
    // SharedModule
  ],
  declarations: [AllCountriesComponent, SingleCountryComponent]
})
export class CountriesModule { }
