(function() {
	'use strict';

	angular.module('app').factory('DribbleService', DribbleService);

	DribbleService.$inject = [];

	function DribbleService() {

		const DRIBBLE_SHOTS_API_V1_URI = 'https://news.ycombinator.com/item?id=';

		return {
			getTopShots: getTopShots
		};

		function getTopShots() {
			return
		}
	};

})();