'use strict';

(function() {

	angular.module('app').component('hackerNews', {
		templateUrl: 'apps/hackernews/hackernews.html',
		controller: HackerNews
	});

	HackerNews.$inject = ['HackerNewsService'];

	function HackerNews(HackerNewsService) {
		const vm = this;

		vm.goToStory = goToStory;
		vm.topStories = [];

		loadStories();

		function loadStories() {
			let topStories = HackerNewsService.getTopStories();

			topStories.$loaded().then(function() {
				for (let i = 0; i < topStories.length; i++) {
					const story = HackerNewsService.getStory(topStories.$getRecord(i).$value);

					story.$loaded().then(function() {
						vm.topStories.push(story);
					});
				};
			});
		}

		function goToStory($event, storyUrl) {
			$event.preventDefault();
			const shell = require('electron').shell;
			shell.openExternal(storyUrl);
			shell.beep();
		}
	}

})();
