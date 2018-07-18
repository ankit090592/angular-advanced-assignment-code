import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-all-countries-shared',
  templateUrl: './all-countries-shared.component.html',
  styleUrls: ['./all-countries-shared.component.css']
})
export class AllCountriesSharedComponent implements OnInit {

//Input from parent component ie parent component is one where this shared module is used/imported
@Input() flag: any;
@Input() countryName: any;
@Input() capitalName: string;
@Input() languages: string[];
@Input() currencies: string[];

  constructor() { }

  ngOnInit() {
  }

}
