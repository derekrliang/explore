(function() {
	'use strict';	
	
	angular.module('app').component('main', {
		templateUrl: 'main/main.html',
		controller: MainController
	});

	function MainController() {
		const vm = this;

		vm.shared = require('electron').remote.getGlobal('sharedObject').someProperty
	}

})();
