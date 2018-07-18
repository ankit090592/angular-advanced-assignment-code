//ViewChild, ElementRef - Activating html element reference support
//for dynamic scrolling of chat window either:
//When user clicks scroll to top and resize scroll-bar 
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { RestCountriesService } from '../../rest-countries.service';
import { ActivatedRoute, Router } from '@angular/router';
//for goBack functionality
import { Location } from '@angular/common'

@Component({
  selector: 'app-all-countries',
  templateUrl: './all-countries.component.html',
  styleUrls: ['./all-countries.component.css'],
  providers: [Location] //inject Location property, local to this component
})
export class AllCountriesComponent implements OnInit {

  //Creating an html id like reference to handle that html element from here/ through JS
  //scrollMe - declared like a property in this component to be used
  // @ViewChild('scrollMe', { read: ElementRef })
  // public scrollMe: ElementRef;

  // langValue: any
  // currencyValue: any
  selectedData: any = [];
  filter = {
    name: "",
	value: ""
  }
  // public selectedRegionData: any = [];
  public scrollToTop: boolean = false;

  constructor(private _route: ActivatedRoute, private router: Router, public restCountriesService: RestCountriesService,
    private location: Location) { }


  ngOnInit() {
    let urlFromSelectedRegion: any = this._route.snapshot.paramMap.get('url');
    this.allCountriesOfRegion(urlFromSelectedRegion);
  }

  public allCountriesOfRegion = (urlFromSelectedRegion) => {
    this.restCountriesService.detailsByRegion(urlFromSelectedRegion).subscribe(
      data => {

        this.selectedData = data;

        console.log("CompleteData:", this.selectedData)

      },
      error => {
        console.log(error.errorMessage);
      }
    );
  }

  public onClickLanguages: any = (event: any) => {
    this.selectedData.length = 0;
    this.filter.name = "language";
    this.filter.value = event.target.innerText;
    //To stop routing to home page after link click
    event.preventDefault();

    this.restCountriesService.detailsOfAllCountries().subscribe(
      data => {
        for (let country of data) {
          for (let langs of country.languages) {
            if (langs.name == this.filter.value) {
              this.selectedData = this.selectedData.concat(country);
            }
          }
        }
        console.log("Languages Data: ", this.selectedData)

      },
      error => {
        console.log(error.errorMessage);
      }
    );
    console.log("Language selected:" + this.filter.value)
  }

  public onClickCurrency: any = (event: any) => {
    this.selectedData.length = 0;
    this.filter.name = "currency"
    this.filter.value = event.target.innerText;
    //To stop routing to home page after link click
    event.preventDefault();

    this.restCountriesService.detailsOfAllCountries().subscribe(
      data => {
        for (let country of data) {
          for (let currency of country.currencies) {
            if (currency.name == this.filter.value) {
              this.selectedData = this.selectedData.concat(country);
            }
          }
        }
        console.log("Currencies Data: ", this.selectedData)

      },
      error => {
        console.log(error.errorMessage);
      }
    );
    console.log(this.filter.value)
  }

  public goBackToPreviousPage(): any {
    this.location.back(); //just goes back to the previous page based on router history,
    //that's why not defining any router
  }

  public scrollPageToTop: any = () => {
    window.scrollTo(0, 0);
    // this.scrollToTop = true;
  }


}
