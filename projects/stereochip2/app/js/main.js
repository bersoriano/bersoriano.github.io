console.log('Main JS file loaded');

angular
	.module('starterApp',['ngMaterial', 'ngMessages','ngRoute'])
	.config(function($mdThemingProvider) {
		$mdThemingProvider.theme('default')
		    .primaryPalette('blue-grey')
		    .accentPalette('orange');
	})
	.config(function($routeProvider){
		$routeProvider

			.when("/one", {
				templateUrl: "one.html"
			})
			.when("/two", {
				templateUrl: "two.html"
			})
			.when("/three", {
				templateUrl: "three.html"
			})
	})
	.controller('BasicDemoCtrl', ['$scope', function($scope){
		console.log('Controller launched');
		var vm = this;


	}]);

