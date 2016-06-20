(function() {
	'use strict';

	angular.module('app').config(Router);

	Router.$inject = ['$routeProvider'];

	function Router($routeProvider) {
		$routeProvider
			.when('/', {
				template: '<main></main>'
			});
	}

})();