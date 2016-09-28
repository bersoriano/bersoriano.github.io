console.log('Main JS file loaded');

angular
	.module('starterApp',['ngMaterial', 'ngMessages'])
	.config(function($mdThemingProvider) {
		$mdThemingProvider.theme('default')
		    .primaryPalette('blue')
		    .accentPalette('orange');
})
	.controller('BasicDemoCtrl', ['$scope', function($scope){
		console.log('Controller launched');
		var vm = this;

	    vm.amountInit = '';
	    vm.showScreen1 = true;
	    vm.showScreen2 = false;
	    vm.showScreen3 = false;
	    vm.showScreen4 = false;

        vm.confirm = function () {
        	vm.showScreen1 = false;
        	vm.showScreen2 =  true;
        }

        vm.searchButton = function () {
        	vm.showScreen2 =  false;
        	vm.showScreen3 = true;
        }

        vm.confirmUser = function () {
        	vm.showScreen3 = false;
        	vm.showScreen4 = true;
        }





	}]);

