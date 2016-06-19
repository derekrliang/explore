'use strict';

(function() {

	angular.module('app').component('hackerNews', {
		templateUrl: 'apps/hackernews/hackernews.html',
		controller: HackerNews
	});

	HackerNews.$inject = ['$window', 'HackerNewsService'];

	function HackerNews($window, HackerNewsService) {
		const vm = this;

		vm.goToStory = goToStory;

		let topStoriesArray = HackerNewsService.getTopStories();

		topStoriesArray.$loaded().then(function() {
			syncTopStories(topStoriesArray);

			topStoriesArray.$watch(function(event) {
				console.log('Syncing top stories from Hacker News!');
				console.log(event);
				syncTopStories(topStoriesArray);
			});
		});

		function syncTopStories(storyArray) {
			let stories = [];

			for (let i = 0; i < storyArray.length; i++) {
				const story = HackerNewsService.getStory(storyArray.$getRecord(i).$value);

				story.$loaded().then(function() {

					// A story without a url is a HN story
					if (story.url === undefined) {
						story.url = HackerNewsService.getHackerNewsUrl(story.id);
					}

					stories.push(story);
				});
			};

			vm.topStories = stories;
		}

		function goToStory($event, storyUrl) {
			$event.preventDefault();
			const shell = require('electron').shell;
			shell.openExternal(storyUrl);
			shell.beep();
		}
	}

})();
