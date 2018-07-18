import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _route: ActivatedRoute) { }

  public regionNames: any = [
    {
      continentName: 'Africa',
      description: 'Africa is the world\'s second largest and second most-populous continent (behind Asia in both categories).'
    },
    {
      continentName: 'Americas',
      description: "The Americas (also collectively called America) comprise the totality of the continents of North and South America.Together, they make up most of the land in Earth's western hemisphere and comprise the New World." 
    },
    {
      continentName: 'Asia',
      description: "Asia is Earth's largest and most populous continent, located primarily in the Eastern and Northern Hemispheres. It shares the continental landmass of Eurasia with the continent of Europe and the continental landmass of Afro-Eurasia with both Europe and Africa"
    },
    {
      continentName: 'Europe',
      description: "Europe is a continent located entirely in the Northern Hemisphere and mostly in the Eastern Hemisphere.  It is bordered by the Arctic Ocean to the north, the Atlantic Ocean to the west and the Mediterranean Sea to the south. It comprises the westernmost part of Eurasia."
    },
    {
      continentName: 'Oceania',
      description: "Oceania is a geographic region comprising Australasia, Melanesia, Micronesia and Polynesia.It covers an area of 8,525,989 square kilometres (3,291,903 sq mi) and has a population of 40 million"
    }
  ];


  ngOnInit() {
    
  }


  
}
