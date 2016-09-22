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
	    var self = this;
	    self.readonly = false;
	    // Lists of fruit names and Vegetable objects
	    self.fruitNames = ['Apple', 'Banana', 'Orange'];
	    self.roFruitNames = angular.copy(self.fruitNames);
	    self.editableFruitNames = angular.copy(self.fruitNames);
	    self.tags = [];
	    self.vegObjs = [
	      {
	        'name' : 'Broccoli',
	        'type' : 'Brassica'
	      },
	      {
	        'name' : 'Cabbage',
	        'type' : 'Brassica'
	      },
	      {
	        'name' : 'Carrot',
	        'type' : 'Umbelliferous'
	      }
	    ];
	    self.newVeg = function(chip) {
	      return {
	        name: chip,
	        type: 'unknown'
	      };
	    };

	    $scope.amountInit = '';
        
        self.creaString = function () {
            var i;
            var unArray = [];
            for (i=0;i<500;i++) {
                var contador = i;
                unArray.push(contador);
            }
            console.log(unArray);
            return unArray;
        }

        self.whatever = self.creaString();

        self.hide = function () {

        }


	}]);

