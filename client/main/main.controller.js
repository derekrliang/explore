'use strict';

(function() {
	
	angular.module('app').component('main', {
		templateUrl: 'main/main.html',
		controller: MainController
	});

	function MainController() {
		console.log("Main Controller!");
	}

})();
