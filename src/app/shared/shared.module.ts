import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCountriesSharedComponent } from './all-countries-shared/all-countries-shared.component';
import { CountryInfoSharedComponent } from './country-info-shared/country-info-shared.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AllCountriesSharedComponent, CountryInfoSharedComponent],

  exports: [
    CountryInfoSharedComponent
  ]
})
export class SharedModule { }
