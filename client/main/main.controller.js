'use strict';

(function() {
	
	angular.module('app').component('main', {
		templateUrl: 'main/main.html',
		controller: MainController
	});

	function MainController() {
		let vm = this;

		vm.shared = require('electron').remote.getGlobal('sharedObject').someProperty
	}

})();
