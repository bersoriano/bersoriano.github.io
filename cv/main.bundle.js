webpackJsonp([0,3],{

/***/ 411:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DeveloperSkillsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DeveloperSkillsService = (function () {
    function DeveloperSkillsService() {
    }
    DeveloperSkillsService.prototype.getTopNavigation = function () {
        return [
            {
                name: "Web UI",
                active: "active",
                val: 1,
            },
            {
                name: "Design",
                active: "",
                val: 2,
            },
            {
                name: "Secondary Skills",
                active: "",
                val: 3,
            }
        ];
    };
    DeveloperSkillsService.prototype.getDevSkills = function () {
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
    ;
    DeveloperSkillsService.prototype.getDesignSkills = function () {
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
    ;
    DeveloperSkillsService.prototype.getSecondarySkills = function () {
        return [
            { name: "Client side architecture" },
            { name: "iOS hybrid apps with Xcode" },
            { name: "Java Server Pages Debugging" },
            { name: "C# with .NET Debugging" },
            { name: "C/C++ Fundamentals" },
            { name: "JavaScript design Patterns" },
            { name: "Scrum Master with Rally" },
            { name: "Algorithms with JavaScript" },
            { name: "JavaScript unit testing" },
            { name: "Node.js REST" }
        ];
    };
    ;
    DeveloperSkillsService.prototype.getCompanyExperience = function () {
        return [
            { name: "Freelance", id: "one" },
            { name: "KTC Agency", id: "two" },
            { name: "KMMX", id: "three" },
            { name: "IBM iX", id: "four" },
            { name: "Accenture FL", id: "five" },
            { name: "Accenture NYC", id: "six" }
        ];
    };
    DeveloperSkillsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], DeveloperSkillsService);
    return DeveloperSkillsService;
}());
//# sourceMappingURL=/Users/bernardo/dev/angular2/BER-SITE/src/developer-skills.service.js.map

/***/ },

/***/ 457:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 457;


/***/ },

/***/ 458:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(608);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(583);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(607);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(604);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_37" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/bernardo/dev/angular2/BER-SITE/src/main.js.map

/***/ },

/***/ 603:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(765),
            styles: [__webpack_require__(762)],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* ViewEncapsulation */].None
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/bernardo/dev/angular2/BER-SITE/src/app.component.js.map

/***/ },

/***/ 604:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hammerjs_hammer__ = __webpack_require__(760);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hammerjs_hammer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_hammerjs_hammer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(603);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__experience_experience_component__ = __webpack_require__(605);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__skills_skills_component__ = __webpack_require__(606);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__experience_experience_component__["a" /* ExperienceComponent */],
                __WEBPACK_IMPORTED_MODULE_8__skills_skills_component__["a" /* SkillsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["e" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MaterialModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/bernardo/dev/angular2/BER-SITE/src/app.module.js.map

/***/ },

/***/ 605:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__developer_skills_service__ = __webpack_require__(411);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ExperienceComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExperienceComponent = (function () {
    function ExperienceComponent(developerSkillsService) {
        this.company = "Accenture";
        this.slider = 100;
        this.companyExperience = developerSkillsService.getCompanyExperience();
    }
    ExperienceComponent.prototype.selectedExperience = function (selectedExperience) {
        switch (selectedExperience) {
            case "Freelance": {
                console.info("Switched to: " + selectedExperience);
                this.slider = 0;
                break;
            }
            case "KTC Agency": {
                console.info("Switched to: " + selectedExperience);
                this.slider = 30;
                break;
            }
            case "KMMX": {
                console.info("Switched to: " + selectedExperience);
                this.slider = 45;
                break;
            }
            case "IBM iX": {
                console.info("Switched to: " + selectedExperience);
                this.slider = 55;
                break;
            }
            case "Accenture FL": {
                console.info("Switched to: " + selectedExperience);
                this.slider = 70;
                break;
            }
            case "Accenture NYC": {
                console.info("Switched to: " + selectedExperience);
                this.slider = 100;
                break;
            }
        }
    };
    ExperienceComponent.prototype.getRange = function (newValue) {
        this.range = newValue;
        console.info(this.range);
    };
    ExperienceComponent.prototype.ngOnInit = function () {
    };
    ExperienceComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-experience',
            template: __webpack_require__(766),
            styles: [__webpack_require__(763)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__developer_skills_service__["a" /* DeveloperSkillsService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__developer_skills_service__["a" /* DeveloperSkillsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__developer_skills_service__["a" /* DeveloperSkillsService */]) === 'function' && _a) || Object])
    ], ExperienceComponent);
    return ExperienceComponent;
    var _a;
}());
//# sourceMappingURL=/Users/bernardo/dev/angular2/BER-SITE/src/experience.component.js.map

/***/ },

/***/ 606:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__developer_skills_service__ = __webpack_require__(411);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SkillsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SkillsComponent = (function () {
    function SkillsComponent(developerSkillsService) {
        /*Initialize*/
        this.selectedValue = "1";
        /*Methods calling the service*/
        this.devSkills = developerSkillsService.getDevSkills();
        this.designSkills = developerSkillsService.getDesignSkills();
        this.secondarySkills = developerSkillsService.getSecondarySkills();
        this.skillsMenu = developerSkillsService.getTopNavigation();
    }
    /*Selecting a Skill type - Triggered when a skill is selected*/
    SkillsComponent.prototype.skillSelected = function (skillType) {
        /*Reseting any active selection*/
        this.skillsMenu.forEach(function (menuItem) {
            menuItem.active = "";
        });
        /*Marking the selected tab as active*/
        skillType.active = "active";
        /*Update the selected value for switching the section*/
        this.selectedValue = skillType.val;
    };
    SkillsComponent.prototype.ngOnInit = function () {
    };
    SkillsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-skills',
            template: __webpack_require__(767),
            styles: [__webpack_require__(764)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__developer_skills_service__["a" /* DeveloperSkillsService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__developer_skills_service__["a" /* DeveloperSkillsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__developer_skills_service__["a" /* DeveloperSkillsService */]) === 'function' && _a) || Object])
    ], SkillsComponent);
    return SkillsComponent;
    var _a;
}());
//# sourceMappingURL=/Users/bernardo/dev/angular2/BER-SITE/src/skills.component.js.map

/***/ },

/***/ 607:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/bernardo/dev/angular2/BER-SITE/src/environment.js.map

/***/ },

/***/ 608:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(622);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(615);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(611);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(617);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(616);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(614);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(613);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(621);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(610);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(609);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(619);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(612);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(620);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(618);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(623);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(817);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/Users/bernardo/dev/angular2/BER-SITE/src/polyfills.js.map

/***/ },

/***/ 762:
/***/ function(module, exports) {

module.exports = ".standardBox {\n  padding: 15px 40px; }\n\n.topSection span {\n  display: block;\n  text-align: center; }\n\n.topSection .title, .topSection .subTitle {\n  margin-bottom: 0; }\n\n.topSection .title {\n  font-size: 22px; }\n\n.topSection .subTitle {\n  font-size: 18px; }\n\n.summary {\n  margin-top: 20px; }\n\n.professionalSummary {\n  text-align: justify;\n  display: block; }\n\n.divider {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  height: 1px;\n  background-color: rgba(128, 128, 128, 0.15);\n  margin: 0px 40px; }\n\n.menu {\n  display: none; }\n\n@media screen and (min-width: 1100px) {\n  .mainAppContainer {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n    .mainAppContainer .resume {\n      -webkit-box-flex: 5;\n          -ms-flex: 5;\n              flex: 5;\n      width: 740px;\n      margin: 30px 0 30px 30px;\n      box-shadow: 0px 5px 20px #dedede; }\n    .mainAppContainer .menu {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-flex: 2;\n          -ms-flex: 2;\n              flex: 2;\n      margin: 30px;\n      box-shadow: 0px 5px 20px #dedede;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      opacity: .9;\n      padding: 20px 0; }\n      .mainAppContainer .menu a {\n        padding: 10px 190px 10px 20px; }\n      .mainAppContainer .menu .profileInfo {\n        margin: 10px auto;\n        text-align: center; }\n      .mainAppContainer .menu .profileImage img {\n        width: 100px;\n        height: 100px;\n        display: block;\n        margin: 10px auto;\n        border-radius: 50px; }\n      .mainAppContainer .menu .twitter, .mainAppContainer .menu .linkedIn, .mainAppContainer .menu .instagram, .mainAppContainer .menu .behance, .mainAppContainer .menu .github {\n        color: white;\n        background-color: #1976D2;\n        margin-bottom: 1px; } }\n"

/***/ },

/***/ 763:
/***/ function(module, exports) {

module.exports = ".experienceHeader {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  border-bottom: 1px solid #ececec;\n  padding: 10px 0; }\n  .experienceHeader img {\n    width: 50px;\n    height: 50px; }\n\n.experienceContent {\n  min-height: 580px;\n  outline: none; }\n\n.experienceHeader .columnCenter {\n  -webkit-box-flex: 1;\n  -ms-flex: 1 1 auto;\n  flex: 1 1 auto;\n  padding-left: 25px; }\n\n.experienceHeader .columnRight {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto; }\n\n.timeline .header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.timeline .sectionTitle {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto; }\n\n.timeline .timelineSegment {\n  min-height: 10px;\n  margin-right: 3px;\n  position: relative; }\n  .timeline .timelineSegment.one {\n    min-width: 31%; }\n  .timeline .timelineSegment.two {\n    min-width: 13%; }\n  .timeline .timelineSegment.three {\n    min-width: 8%; }\n  .timeline .timelineSegment.four {\n    min-width: 15%; }\n  .timeline .timelineSegment.five {\n    min-width: 14%; }\n  .timeline .timelineSegment.six {\n    min-width: 14%; }\n\n.timeline .timelineSegment span {\n  position: absolute;\n  display: block;\n  width: 100%;\n  margin-left: -16px; }\n  .timeline .timelineSegment span.company {\n    text-align: center; }\n  .timeline .timelineSegment span.year {\n    padding: 10px 0;\n    text-align: left;\n    top: 0px;\n    top: -43px; }\n\n.timelineContainer {\n  margin: 10px 0 50px; }\n\n.timelineSegmentContainer {\n  margin-bottom: -10px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n  .timelineSegmentContainer.years button:after {\n    content: \"\";\n    width: 2px;\n    height: 10px;\n    background-color: #d7d7d7;\n    position: absolute;\n    left: 0px; }\n\n.timelineSegmentContainer.years {\n  padding: 35px 0 25px 0px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  .timelineSegmentContainer.years button {\n    border-bottom: 1px solid #d7d7d7;\n    margin: 0;\n    border-radius: 0;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    cursor: default; }\n\n.timelineSegmentContainer.company button {\n  border-radius: 0;\n  background-color: #FFA000; }\n\n.experienceContainer {\n  text-align: justify; }\n"

/***/ },

/***/ 764:
/***/ function(module, exports) {

module.exports = ".header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n  .header button {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1; }\n\nbutton.sectionTitle {\n  color: gray; }\n  button.sectionTitle.active {\n    color: black;\n    background-color: #E3F2FD;\n    border-bottom: 3px solid #1976D2; }\n\n.buttonContainer {\n  min-height: 100px;\n  -webkit-justify-content: space-between;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1; }\n\n.buttonContainer button {\n  min-width: 18%;\n  width: 18%;\n  max-width: 18%;\n  white-space: normal;\n  word-break: break-word;\n  line-height: 16px;\n  min-height: 40px;\n  margin-bottom: 10px;\n  background-color: #1976D2;\n  color: white;\n  padding: 10px 0; }\n\n.buttonMenu {\n  padding-top: 20px; }\n\n.buttonContainer {\n  padding: 10px 0 5px 0;\n  margin-bottom: -10px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n"

/***/ },

/***/ 765:
/***/ function(module, exports) {

module.exports = "<div class=\"mainAppContainer\">\n\t<div class=\"resume\">\n\t\t<!-- Top Section -->\n\t\t<div class=\"topSection standardBox\">\n\t\t\t<h1 class=\"title\">Bernardo Soriano - User Interface Engineer</h1>\t\n\t\t\t<h2 class=\"subTitle\">www.bernardosoriano.com | bersoriano@me.com | @bersoriano</h2>\n\t\t</div>\n\t\t<!-- Professional summary -->\n\t\t<div class=\"professionalSummary standardBox\">\n\t\t\t<div class=\"header\">\n\t\t\t\t<span class=\"sectionTitle bold\">Professional Summary.</span>\n\t\t\t</div>\n\t\t\t<div class=\"summary\">\n\t\t\t\t<span>End to end development, design and delivery of easy to use applications from scratch, experience working in large scale web applications for finance.</span>\n\t\t\t\t<span>Some of the products developed includes mobile banking, transactional banking, interactive insurance calculators and dashboards, iPad web interfaces, interactive touch kiosks, sales tools for global markets and stock trading pricer tools.</span>\n\t\t\t\t<span>Cross-functional interactions with back-end engineering, experience design, business analysts, senior management and product teams.</span>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"divider\"></div>\n\t\t<!-- Developer Skills -->\n\t\t\t<app-skills></app-skills>\n\t\t\t<div class=\"divider\"></div>\t\n\t\t<!-- Working Experience -->\n\t\t<div class=\"standardBox\">\n\t\t\t<div class=\"experienceContainer\">\n\t\t\t\t<app-experience></app-experience>\t\n\t\t\t</div>\n\t\t</div>\t\n\t</div>\n\t<div class=\"menu\">\n\t\t<h3 class=\"profileInfo\">Profile Info</h3>\n\t\t<div class=\"profileImage\">\n\t\t\t<img src=\"https://media.licdn.com/media/AAEAAQAAAAAAAAuyAAAAJDA0YmQ5MjRlLWYwZDYtNGFlMC05ODdmLTQ2ZThlNTVmMTQ0Yw.jpg\">\n\t\t</div>\n\t\t<md-list>\n\t\t  <md-list-item class=\"twitter\">\n\t\t  \t<a href=\"https://twitter.com/bersoriano\">Twitter</a>\n\t\t  </md-list-item>\n\t\t  <md-list-item class=\"linkedIn\">\n\t\t  \t<a href=\"http://www.linkedin.com/in/bernardosoriano\">LinkedIn</a>\n\t\t  </md-list-item>\n\t\t  <md-list-item class=\"instagram\">\n\t\t  \t<a href=\"http://www.instagram.com/bersoriano/\">Instagram</a>\n\t\t  </md-list-item>\n\t\t  <md-list-item class=\"behance\">\n\t\t  \t<a href=\"http://www.behance.net/bersoriano\">Behance</a>\n\t\t  </md-list-item>\n\t\t  <md-list-item class=\"github\">\n\t\t  \t<a href=\"http://github.com/bersoriano\">Github</a>\n\t\t  </md-list-item>\n\t\t</md-list>\n\t</div>\t\n</div>"

/***/ },

/***/ 766:
/***/ function(module, exports) {

module.exports = "<!-- Timeline -->\n<div class=\"timeline\">\n\t<div class=\"header\">\n\t\t<span class=\"sectionTitle bold\">Experience.</span>\t\t\n\t</div>\n\t<div class=\"timelineContainer\">\n\t    <div class=\"timelineSegmentContainer years\">\n\t\t\t<button class=\"timelineSegment first\" md-button><span class=\"year\">2011</span></button>\n\t\t\t<button class=\"timelineSegment second\" md-button><span class=\"year\">2012</span></button>\n\t\t\t<button class=\"timelineSegment third\" md-button><span class=\"year\">2013</span></button>\n\t\t\t<button class=\"timelineSegment fourth\" md-button><span class=\"year\">2014</span></button>\n\t\t\t<button class=\"timelineSegment fifth\" md-button><span class=\"year\">2015</span></button>\n\t\t\t<button class=\"timelineSegment sixt\" md-button><span class=\"year\">2016</span></button>\n\t\t\t<span class=\"year\">Now</span>\n\t    </div>\t\n\t    <div class=\"timelineSegmentContainer company\">\n\t    \t<button\n\t    \t\tmd-button \n\t    \t\t*ngFor=\"let experience of companyExperience\"\n\t    \t\t(click)=\"selectedExperience(experience.name)\" \n\t    \t\tclass=\"timelineSegment {{experience.id}}\">\n\t    \t\t<span class=\"company\">{{experience.name}}</span>\n\t    \t</button>\n\t    </div>\t\t\n\t</div>\t\n</div>\t\n<!-- Latest working experience - Accenture -->\n<div *ngIf=\"slider > 80\">\n\t<!-- Experience header -->\n\t<div class=\"experienceHeader\">\n\t\t<div class=\"columnLeft\">\n\t\t\t<img src=\"https://media.licdn.com/mpr/mpr/shrinknp_100_100/AAEAAQAAAAAAAAeSAAAAJDE5ZmVhOTBlLTU4YzctNDI0NC05NmQ0LTJmYTdiMGJjMzY3Nw.png\">\n\t\t</div>\n\t\t<div class=\"columnCenter\">\n\t\t\t<span class=\"companyName bold\">{{company}}</span>\n\t\t\t<div class=\"title\">UI Software Engineer Team Lead | New York City, NY</div>\n\t\t</div>\n\t\t<div class=\"columnRight\">\n\t\t\t<span class=\"date\">April 2016 - Now</span>\t\t\t\t\n\t\t</div>\t\t\t\n\t</div>\n\t<!-- Experience Content -->\n\t<div class=\"experienceContent\">\n\t\t<p class=\"descriptionTitle bold\">Description.</p>\n\t\t<p class=\"regularText\">Design and development of financial applications for global markets such as stock trading pricers,  sales tools for traders and notifications applications. Working across different teams and taking ownership of the UI, co working with the product manager, designer and back-end developers for the delivery.</p>\n\t\t<span class=\"descriptionTitle bold\">Technologies and tools used.</span>\n\t\t<p class=\"regularText\">Angular.js | Angular Cli | Angular Material | LESS | SASS | Node | NPM | Gulp | C# | Microsoft TFS</p>\n\t\t<span class=\"descriptionTitle bold\">Work:</span>\n\t\t<ul>\n\t\t\t<li>Dynamic rendering of notifications with real time streams of data.</li>\n\t\t\t<li>UI performance testing/enhancement.</li>\n\t\t\t<li>Design and development of financial widgets including micro interactions.</li>\n\t\t\t<li>MVVM application, development of custom directives and reusable UI components.</li>\n\t\t\t<li>Extending and customizing Angular Material components, modified the Angular Material core.</li>\n\t\t\t<li>Coach and Mentor developers and designers.</li>\n\t\t</ul>\n\t\t<span class=\"descriptionTitle bold\">Acomplishments:</span>\n\t\t<ul>\n\t\t\t<li>Custom UI developed from scratch: Typeahead fast search, Dynamic Tables, Modal windows, Dynamic carousels, Toolbars, Infinite scroll, Collapsibles, Dropdowns.</li>\n\t\t\t<li>Defined Front end guidelines with a custom UI library.</li>\n\t\t\t<li>Multiple prototypes delivered for 3 financial applications; 16-32 hours in average needed for initial UI prototyping with Angular using mock data for the data structures.</li>\n\t\t\t<li>Improved performance rendering of data with more than 5000 records by implementing an interactive lazy loading, time improvement from 12s to less than 1s.</li>\n\t\t\t<li>Implemented filters and sorting options over collections of data with vanilla JavaScript and Angular.js filters.</li>\n\t\t\t<li>Delivery of interfaces for 3 financial applications using Angular Material and Material Design.</li>\n\t\t\t<li>Implementation of search and sorting algorithms with JavaScript.</li>\n\t\t</ul>\t\n\t</div>\t\t\n</div>\n<!-- Accenture Florida -->\n<div  *ngIf=\"slider <= 80 && slider >= 60\">\n\t<!-- Experience header -->\n\t<div class=\"experienceHeader\">\n\t\t<div class=\"columnLeft\">\n\t\t\t<img src=\"https://media.licdn.com/mpr/mpr/shrinknp_100_100/AAEAAQAAAAAAAAeSAAAAJDE5ZmVhOTBlLTU4YzctNDI0NC05NmQ0LTJmYTdiMGJjMzY3Nw.png\">\n\t\t</div>\n\t\t<div class=\"columnCenter\">\n\t\t\t<span class=\"companyName bold\">{{company}}</span>\n\t\t\t<div class=\"title\">UI Software Engineer Team Lead | Jacksonville, FL.</div>\n\t\t</div>\n\t\t<div class=\"columnRight\">\n\t\t\t<span class=\"date\">May 2015 - March 2016</span>\t\t\t\t\n\t\t</div>\t\t\t\n\t</div>\n\t<!-- Experience Content -->\n\t<div class=\"experienceContent\">\n\t\t<p class=\"descriptionTitle bold\">Description.</p>\n\t\t<p class=\"regularText\">Development of financial applications for iPad and interactive touch Kiosks. Collaborated with back-end developers, IT architects, visual designers, product designers, product managers and hardware engineers in distributed teams in France, India an other US locations.</p>\n\t\t<span class=\"descriptionTitle bold\">Technologies and tools used.</span>\n\t\t<p class=\"regularText\">Backbone.js | Marionette | Underscore | CoffeeScript | LESS | Node.js | NPM | Grunt | Jasmine | Istanbul | SonarQube</p>\n\t\t<span class=\"descriptionTitle bold\">Work:</span>\n\t\t<ul>\n\t\t\t<li>Participated in daily scrum meetings and co worked with the team doing sprint planning, defining user stories and breaking down tasks for every sprint.</li>\n\t\t\t<li>Development of JavaScript MVC single page applications.</li>\n\t\t\t<li>Owned, enhanced and developed product features.</li>\n\t\t\t<li>Co-worked with the team for defining the web architecture of new applications and proof of concepts.</li>\n\t\t\t<li>Defect tracking and solving through development, integration, pre-prod and production environments using Kanban.</li>\n\t\t</ul>\n\t\t<span class=\"descriptionTitle bold\">Acomplishments:</span>\n\t\t<ul>\n\t\t\t<li>Delivered an UI pixel perfect library of reusable components and layouts using Backbone and Underscore templates.</li>\n\t\t\t<li>Improved gestures and the touch experience for touch Kiosks and iPad web interfaces.</li>\n\t\t\t<li>Refactored UI components for iPad web applications.</li>\n\t\t\t<li>Implemented JavaScript unit testing for web applications using Jasmine.</li>\n\t\t</ul>\t\n\t</div>\t\t\n</div>\n<!-- IBM Interactive -->\n<div  *ngIf=\"slider <= 60 && slider >= 50 \">\n\t<!-- Experience header -->\n\t<div class=\"experienceHeader\">\n\t\t<div class=\"columnLeft\">\n\t\t\t<img src=\"https://media.licdn.com/mpr/mpr/shrinknp_100_100/AAEAAQAAAAAAAAwZAAAAJDMyZmQ4ZWRiLTU2ZjctNDg0ZS05MzY2LTUyOTk0N2VhNjRmNQ.png\">\n\t\t</div>\n\t\t<div class=\"columnCenter\">\n\t\t\t<span class=\"companyName bold\">IBM Interactive Experience.</span>\n\t\t\t<div class=\"title\">Front-End Lead | México City, MX.</div>\n\t\t</div>\n\t\t<div class=\"columnRight\">\n\t\t\t<span class=\"date\">March 2014 - February 2015</span>\t\t\t\t\n\t\t</div>\t\t\t\n\t</div>\n\t<!-- Experience content -->\n\t<div class=\"experienceContent\">\n\t\t<p class=\"descriptionTitle bold\">Description.</p>\n\t\t<p class=\"regularText\">Worked in one of the largest cross-platform transformations between IBM and one of the top banks in México. Development of transactional personal web banking and business banking. Collaborated with functional back-end developers, enterprise IT architects, visual designers, business analysts, QA, product managers and senior management. Cross collaboration with the offshore team from Spain for developing modules of the application.</p>\n\t\t<span class=\"descriptionTitle bold\">Technologies and tools used.</span>\n\t\t<p class=\"regularText\">Dojo Toolkit | jQuery | LESS | Grunt.js | Yeoman | IBM BTT | IBM RAD | IBM RTC | WebSphere Portal | Java Server Pages | Websphere Application Server | GIT</p>\n\t\t<span class=\"descriptionTitle bold\">Work:</span>\n\t\t<ul>\t\t\t\n\t\t\t<li>Co worked with the team for defining the front-end architecture, file compilation and optimization, module loading and builds.</li>\n\t\t\t<li>Coded UI pixel perfect interactive widgets and layouts with JavaScript and LESS CSS3.</li>\n\t\t\t<li>Co worked with the China’s IBM laboratory for developing custom UI for the IBM Bank Transformation Toolkit modules.</li>\n\t\t\t<li>Applied technical interviews for hiring new team members, onboarding and mentoring the newcomers.</li>\n\t\t\t<li>Handled product related defects/issues using Kanban and HP ALM for 60 modules targeting, integration, UAT and production environments.</li>\n\t\t</ul>\n\t\t<span class=\"descriptionTitle bold\">Acomplishments:</span>\n\t\t<ul>\n\t\t\t<li>Delivered with the team cross browser front-end code for Chrome, IE 9+, Safari for iPad and the native browser of the Android Galaxy tablet.</li>\n\t\t\t<li>Delivered multiple HTML5 interactive prototypes for being tested by the product managers and transformation directors.</li>\n\t\t\t<li>Designed with the team the implementation of themes resulting in more than 95% of code reused.</li>\n\t\t\t<li>Delivered with the team urgent fixes for more than 90 defects after the first release to production environments.</li>\n\t\t\t<li>Delivered web user interfaces for more than 60 banking operations / modules.</li>\n\t\t\t<li>The project became a case study for improving the user experience in banking.</li>\n\t\t\t<li>Other facts: Two years later the bank was named as bank of the year for 2016 by The Banker and for early 2017 was in the top 3 of the most profitable banks in the country.</li>\n\t\t</ul>\t\n\t</div>\t\t\n</div>\n<!-- KMMX -->\n<div  *ngIf=\"slider <= 50 && slider >= 40 \">\n\t<!-- Experience header -->\n\t<div class=\"experienceHeader\">\n\t\t<div class=\"columnLeft\">\n\t\t\t<img src=\"https://media.licdn.com/mpr/mpr/shrinknp_100_100/p/1/000/0c2/194/0cd4f8e.png\">\n\t\t</div>\n\t\t<div class=\"columnCenter\">\n\t\t\t<span class=\"companyName bold\">KMMX.</span>\n\t\t\t<div class=\"title\">Mobile and Front-end trainer | México City, MX.</div>\n\t\t</div>\n\t\t<div class=\"columnRight\">\n\t\t\t<span class=\"date\">September 2013 - March 2014</span>\t\t\t\t\n\t\t</div>\t\t\t\n\t</div>\n\t<!-- Experience content -->\n\t<div class=\"experienceContent\">\n\t\t<p class=\"descriptionTitle bold\">Description.</p>\n\t\t<p class=\"regularText\">Worked as an instructor for front-end, mobile web and hybrid applications. Trained enterprise teams for updating their web development skills, usually teaching to groups of 3-8 people in 30-50 hour courses.</p>\n\t\t<span class=\"descriptionTitle bold\">Technologies and tools used.</span>\n\t\t<p class=\"regularText\">HTML5 | CSS3 | JavaScript | jQuery Mobile | Xcode | Android SDK & ADT | Eclipse | Sencha Touch | Phonegap API | Mustache.js | GIT</p>\n\t\t<span class=\"descriptionTitle bold\">Work:</span>\n\t\t<ul>\n\t\t\t<li>Guided the students from using old web standards to learn HTML5 APIs, JavaScript and CSS3.</li>\n\t\t\t<li>Taught the use of Xcode and Eclipse for developing hybrid mobile apps.</li>\n\t\t\t<li>Taught the fundamentals of JavaScript, how object oriented programming works on JavaScript compared with other OOP languages such as C# and Java.</li>\n\t\t\t<li>Taught how to parse JSON server responses with AJAX and integrate it into a mobile application.</li>\n\t\t\t<li>Taught the use of Back End as a service (BaaS) with the Parse API.</li>\n\t\t\t<li>Taught how to develop interactive single page applications with jQuery and handlebars and mustache templates.</li>\n\t\t\t<li>Taught the use of Adobe Phonegap (Apache Cordova) JavaScript API for developing mobile web apps.</li>\n\t\t\t<li>Taught the use of control version with GIT and Github.</li>\n\t\t\t<li>Taught the use of the Sencha command line interface and Sencha Touch MVC development.</li>\n\t\t</ul>\n\t</div>\t\t\n</div>\n<!-- KTC - Profuturo -->\n<div  *ngIf=\"slider <= 40 && slider >= 0\">\n\t<!-- Experience header -->\n\t<div class=\"experienceHeader\">\n\t\t<div class=\"columnLeft\">\n\t\t\t<img src=\"https://media.licdn.com/mpr/mpr/shrinknp_100_100/p/6/005/088/25d/2c3e308.png\">\n\t\t</div>\n\t\t<div class=\"columnCenter\">\n\t\t\t<span class=\"companyName bold\">KTC Agency - Profuturo GNP.</span>\n\t\t\t<div class=\"title\">Mobile and Front-end developer | México City, MX.</div>\n\t\t</div>\n\t\t<div class=\"columnRight\">\n\t\t\t<span class=\"date\">January 2013 - October 2013</span>\t\t\t\t\n\t\t</div>\t\t\t\n\t</div>\n\t<!-- Experience content -->\n\t<div class=\"experienceContent\">\n\t\t<p class=\"descriptionTitle bold\">Description.</p>\n\t\t<p class=\"regularText\">Development of web, mobile and tablet interactive interfaces for investment funds and insurance company. Co worked with visual designers, experience designers, copywriters, back-end developers and project managers.</p>\n\t\t<span class=\"descriptionTitle bold\">Technologies and tools used.</span>\n\t\t<p class=\"regularText\">HTML5 | CSS3 | LESS | jQuery | Sencha Touch | Pure.js | Phonegap CLI (Cordova) | Xcode | Android SDK | GIT</p>\n\t\t<span class=\"descriptionTitle bold\">Work:</span>\n\t\t<ul>\n\t\t\t<li>Coded front-end guide lines based on UX design specifications.</li>\t\n\t\t\t<li>Used the sencha touch mvc for developing hybrid mobile web apps.</li>\n\t\t\t<li>Coded UI pixel perfect interactive widgets and layouts with JavaScript and LESS.</li>\n\t\t\t<li>Used the Phonegap (Cordova) JavaScript API for integrating hardware mobile functionalities.</li>\n\t\t\t<li>Hybrid mobile application development for Android and iOS.</li>\n\t\t\t<li>Deliver across the entire life cycle requirements capture, design, build, deploy, test, and release to the app store and support</li>\n\t\t</ul>\n\t\t<span class=\"descriptionTitle bold\">Acomplishments:</span>\n\t\t<ul>\n\t\t\t<li>Delivered an interactive dashboard application optimized for iPad and the native browser of the Android tablets.</li>\n\t\t\t<li>Delivered and interactive mobile web application optimized for iphone 5 and android.</li>\n\t\t\t<li>Added functionality to an existing Sencha Touch iOS and Android application.</li>\n\t\t</ul>\t\n\t</div>\t\t\n</div>\t"

/***/ },

/***/ 767:
/***/ function(module, exports) {

module.exports = "<!-- Developer Skills -->\n<div class=\"standardBox\" [ngSwitch]=\"selectedValue\">\n\t<div class=\"header\">\n\t\t<span class=\"sectionTitle bold\">Skills.</span>\t\t\n\t</div>\n\t<div class=\"header buttonMenu\">\n\t\t<button md-button class=\"sectionTitle\"\n\t\t\t*ngFor=\"let skillType of skillsMenu\"\n\t\t\t[ngClass]=\"skillType.active\"\n\t\t\t(click)=\"skillSelected(skillType)\">{{skillType.name}}</button>\n\t</div>\t\n\t<div class=\"buttonContainer\" *ngSwitchCase=\"1\">\n\t\t<button md-button *ngFor=\"let skill of devSkills\">{{skill.name}}</button>\t\t\n\t</div>\n\t<div class=\"buttonContainer\" *ngSwitchCase=\"2\">\n\t\t<button md-button *ngFor=\"let skill of designSkills\">{{skill.name}}</button>\t\t\n\t</div>\n\t<div class=\"buttonContainer\" *ngSwitchCase=\"3\">\n\t\t<button md-button *ngFor=\"let skill of secondarySkills\">{{skill.name}}</button>\t\t\n\t</div>\t\t\t\n</div>"

/***/ },

/***/ 818:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(458);


/***/ }

},[818]);
//# sourceMappingURL=main.bundle.map