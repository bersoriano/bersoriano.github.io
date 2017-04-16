import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass']
})
export class NavigationComponent implements OnInit {

	navigationMenu;

	constructor() {

		this.navigationMenu = [
			{
				name: "Home",
				active: "",
				router: ""
			},
			{
				name: "Profile",
				active: "",
				router: "profile"
			},			
			{
				name: "Hacker Garage",
				active: "",
				router: "hacker-garage"
			},
			{
				name: "Articles",
				active: "",
				router: ""
			},	
			{
				name: "Mentorships",
				active: "",
				router: ""
			},
			{
				name: "Photography",
				active: "",
				router: ""
			}		
		]

	}

	selectedNavigation (selectedNavEl) {
		debugger;
		console.info("Selected "+selectedNavEl.name);
		this.navigationMenu.forEach(function(navElement){
			navElement.active = "";
			if ( navElement.name === selectedNavEl.name ) {
				navElement.active = "active";
			}
		})
	}	

	ngOnInit() {
		this.navigationMenu[0].active = "active";
	}

}
