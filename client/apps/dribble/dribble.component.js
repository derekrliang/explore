(function() {
	'use strict';
	
	angular.module('app').component('dribble', {
		templateUrl: 'apps/dribble/dribble.html',
		controller: Dribble
	});

	Dribble.$inject = ['DribbleService'];

	function Dribble(DribbleService) {
		const vm = this;

		
	}

})();