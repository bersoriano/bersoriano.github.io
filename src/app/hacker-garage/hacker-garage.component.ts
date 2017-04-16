import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hacker-garage',
  templateUrl: './hacker-garage.component.html',
  styleUrls: ['./hacker-garage.component.sass']
})
export class HackerGarageComponent implements OnInit {

	hackathonList;
	projectsList;


	constructor() {
		this.hackathonList = [
			{
				name: "Apptualízate1 2012",
				demoAvailable: "",
				active: ""
			},
			{
				name: "Ciudad Móvil DF 2 2012",
				demoAvailable: "",
				active: ""
			},			
			{
				name: "Blackberry 10 Jam 2012",
				demoAvailable: "",
				active: ""
			},	
 			{
				name: "Startup weekend for the planet",
				demoAvailable: "",
				active: ""
			},
 			{
				name: "DevfestW",
				demoAvailable: "",
				active: ""
			},				
  			{
				name: "NASA Space App Challenge",
				demoAvailable: "",
				active: ""
			},
  			{
				name: "Angel hack México city 2014",
				demoAvailable: "",
				active: ""
			},
  			{
				name: "Spotify Music Hackathon NY 2016",
				demoAvailable: "",
				active: ""
			},
  			{
				name: "Bank of America Code Week 2016",
				demoAvailable: "",
				active: ""
			}			
		];
		this.projectsList = [
			{
				name: "Typeahead fast search",
				demoAvailable: "",
				active: ""				
			},
			{
				name: "Infinite scroll",
				demoAvailable: "",
				active: ""				
			},
			{
				name: "Infinite pagination",
				demoAvailable: "",
				active: ""				
			},
			{
				name: "Custom dashboards",
				demoAvailable: "",
				active: ""				
			},
			{
				name: "One way navigation",
				demoAvailable: "",
				active: ""				
			}						
		]
	}

  ngOnInit() {
  }

}
