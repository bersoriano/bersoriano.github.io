import { Component, OnInit } from '@angular/core';
import { DeveloperSkillsService  } from '../developer-skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.sass'],
  providers: [DeveloperSkillsService]
})
export class SkillsComponent implements OnInit {

	devSkills;
	designSkills;
	secondarySkills;
	selectedValue;
	skillsMenu;
	activeClass;


  constructor( developerSkillsService : DeveloperSkillsService ) { 
  	/*Initialize*/
  		this.selectedValue = "1";

  	/*Methods calling the service*/
	  	this.devSkills = developerSkillsService.getDevSkills();
	  	this.designSkills = developerSkillsService.getDesignSkills();
	  	this.secondarySkills = developerSkillsService.getSecondarySkills();
	  	this.skillsMenu = developerSkillsService.getTopNavigation();

  }

  /*Selecting a Skill type - Triggered when a skill is selected*/
	  skillSelected (skillType) {
	  	/*Reseting any active selection*/
		    this.skillsMenu.forEach((menuItem) => {
		    	menuItem.active = "";
		    });
		/*Marking the selected tab as active*/
	  		skillType.active = "active";
	  	/*Update the selected value for switching the section*/
	  		this.selectedValue = skillType.val;

	  }

  ngOnInit() {
  }

}
