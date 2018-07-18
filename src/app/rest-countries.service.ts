import { Injectable } from '@angular/core';

//importing http client to make requests
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { HttpErrorResponse, HttpParams } from '@angular/common/http'

//Observable is like a medium of interaction between components & API 
import { Observable } from "rxjs/Observable"
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/toPromise'
@Injectable({
  providedIn: 'root'
})

export class RestCountriesService {

  private url = 'https://restcountries.eu/rest/v2/';
  constructor(public http: HttpClient) { }

  //to get all countries of selected region from home component
  public detailsByRegion(data): any {    
    return this.http.get(this.url + 'region/' + data + '?fields=name;capital;currencies;languages;flag');
  }

  //to get all countries irrespective of region based on filter selected
  public detailsOfAllCountries(): any {
    return this.http.get(this.url + 'all?fields=name;capital;currencies;languages;flag');
  }

  //to get all details of a country selected in all Countries component
  public allDetailsOfCountry(countryName): any {
    return this.http.get(this.url + 'name/' + countryName + '?fullText=true');
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if(err.error instanceof Error)
    errorMessage = 'An error occurred in service ${err.error.message}';
  }
  

}
