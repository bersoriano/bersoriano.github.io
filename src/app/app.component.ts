import { Component,ViewEncapsulation } from '@angular/core';
import { ExperienceComponent } from './experience/experience.component';
import { DeveloperSkillsService } from './developer-skills.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {



	constructor() { 

	}

}
