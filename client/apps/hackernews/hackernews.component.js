'use strict';

(function() {

	angular.module('app').component('hackerNews', {
		templateUrl: 'apps/hackernews/hackernews.html',
		controller: HackerNews
	});

	HackerNews.$inject = ['HackerNewsService'];

	function HackerNews(HackerNewsService) {
		let vm = this;

		let topStories = HackerNewsService.getTopStories();
		vm.topStories = [];

		topStories.$loaded().then(function() {
			for (let i = 0; i < topStories.length; i++) {
				let story = HackerNewsService.getStory(topStories.$getRecord(i).$value);

				story.$loaded().then(function() {
					vm.topStories.push(story);
				});
			};

			console.log(vm.topStories);
		});
	}

})();
