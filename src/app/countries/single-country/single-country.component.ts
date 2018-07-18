import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestCountriesService } from '../../rest-countries.service';
//for goBack functionality
import { Location } from '@angular/common'
// import { $ } from '../../../../node_modules/protractor';
import * as $ from 'jquery';
@Component({
  selector: 'app-single-country',
  templateUrl: './single-country.component.html',
  styleUrls: ['./single-country.component.css']
})
export class SingleCountryComponent implements OnInit {

  selectedData: any = [];
  constructor(private _route: ActivatedRoute, private router: Router, public restCountriesService: RestCountriesService,
    private location: Location) { }

  ngOnInit() {
    let urlFromSelectedCountry: any = this._route.snapshot.paramMap.get('url');
    this.singleCountryDetails(urlFromSelectedCountry);

    $('.bottom').each(function () {
      $(this).prop('Counter', 0).animate({
        Counter: parseInt($(this).text())
      }, {
          duration: 1000,
          easing: 'swing',
          step: function (now) {
            $(this).text(Math.ceil(now));
          }
        });
    });
  }

  public singleCountryDetails = (urlFromSelectedCountry) => {
    this.restCountriesService.allDetailsOfCountry(urlFromSelectedCountry).subscribe(
      data => {

        this.selectedData = data;

        console.log("Complete Country Details:", this.selectedData)

      },
      error => {
        console.log(error.errorMessage);
      }
    );

  }

  public goBackToPreviousPage(): any {
    this.location.back(); //just goes back to the previous page based on router history,
    //that's why not defining any router
  }

}
