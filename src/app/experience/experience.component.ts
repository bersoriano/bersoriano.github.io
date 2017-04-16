import { Component, OnInit } from '@angular/core';
import { DeveloperSkillsService  } from '../developer-skills.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.sass'],
  providers: [DeveloperSkillsService]
})
export class ExperienceComponent implements OnInit {

  company;
  slider;
  range;
	companyExperience;  
  
  constructor( developerSkillsService : DeveloperSkillsService ) { 
  	this.company = "Accenture";
  	this.slider = 100;

  	this.companyExperience = developerSkillsService.getCompanyExperience(); 	
  }

  selectedExperience (selectedExperience) {
  	switch(selectedExperience) {
  		case "Freelance": {
  			console.info("Switched to: "+selectedExperience)
  			this.slider = 0;
  			break;
  		}
  		case "KTC Agency": {
  			console.info("Switched to: "+selectedExperience)
  			this.slider = 30
  			break;
  		}
  		case "KMMX": {
  			console.info("Switched to: "+selectedExperience)
  			this.slider = 45
  			break;
  		}
  		case "IBM iX": {
  			console.info("Switched to: "+selectedExperience)
  			this.slider = 55
  			break;
  		}
  		case "Accenture FL": {
  			console.info("Switched to: "+selectedExperience)
  			this.slider = 70
  			break;
  		}
  		case "Accenture NYC": {
  			console.info("Switched to: "+selectedExperience)
  			this.slider = 100
  			break;
  		}  		  		  		  		  		
  	}
  }

	getRange(newValue) {
	  this.range = newValue;
	  console.info(this.range);
	} 

  ngOnInit() {
  }

}
