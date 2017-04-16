import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

	selectedLargerFont;
	selectedBoldFont;	

 	constructor() { }

	largerFont () {
		debugger;
		this.selectedLargerFont === false ? this.selectedLargerFont = true : this.selectedLargerFont = false;
	};

	bolderFont () {
		debugger
		this.selectedBoldFont === false ? this.selectedBoldFont = true : this.selectedBoldFont = false;
	};  

	ngOnInit() {
		this.selectedLargerFont = false;
		this.selectedBoldFont = false;
	}

}
