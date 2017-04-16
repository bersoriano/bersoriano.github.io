import { Injectable } from '@angular/core';

@Injectable()
export class DeveloperSkillsService {


 	constructor() {

 	}

 	getTopNavigation () : Object {
 		return [
			{
				name: "Web UI",
				active: "active",
				val:1,
			},
			{
				name: "Design",
				active: "",
				val:2,
			},
			{
				name: "Secondary Skills",
				active: "",
				val:3,
			}			
 		];
 	}

	getDevSkills() : Object[] {
		return [
		  	{ name: "Angular.js" },
		  	{ name: "Angular2" },
		  	{ name: "Angular Material" },
		  	{ name: "Ext.js / Sencha touch" },
		  	{ name: "LESS & SASS" },
		  	{ name: "Grunt / Gulp" },
		  	{ name: "Backbone.js" },		  	
		  	{ name: "Underscore" },
		  	{ name: "Browserify / WebPack" },
		  	{ name: "RxJS" },
		];
	};

	getDesignSkills() : Object[] {
		return [
		  	{ name: "Interaction design" },
		  	{ name: "UI design patterns" },
		  	{ name: "Mobile Interfaces" },
		  	{ name: "Custom UI Components" },
		  	{ name: "Fast web prototyping" },
		  	{ name: "Dashboard design" },
		  	{ name: "Data oriented design" },
		  	{ name: "Information architecture" },
		  	{ name: "Wireframing with Axure Pro" },
		  	{ name: "Sketch App" }   	
		  ];
	};

	getSecondarySkills() : Object[] {
		return [
			{ name: "UI Front-end architecture" },
			{ name: "iOS hybrid apps with Xcode" },
			{ name: "JSP Debugging" },
			{ name: "C# with .NET Debugging" },
			{ name: "C/C++ Fundamentals" },
			{ name: "JavaScript design Patterns" },
			{ name: "Scrum Master with Rally" },
			{ name: "Algorithms with JavaScript" },
			{ name: "JavaScript unit testing" },
			{ name: "Node.js REST" }
		];
	};

	getCompanyExperience() : Object [] {
		return [
			{ name: "Freelance", id: "one" },
			{ name: "KTC Agency", id: "two" },
			{ name: "KMMX", id: "three" },
			{ name: "IBM iX", id: "four" },
			{ name: "Accenture FL", id: "five" },
			{ name: "Accenture NYC", id: "six" }
		]
	}

}
