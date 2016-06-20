(function() {
	'use strict';

	angular.module('app').factory('HackerNewsService', HackerNewsService);

	HackerNewsService.$inject = ['$firebaseObject', '$firebaseArray'];

	function HackerNewsService($firebaseObject, $firebaseArray) {

		const FIREBAES_HACKER_NEWS = firebase.app('hackerNewsFirebase');
		const FIREBASE_HACKER_NEWS_VERSION= 'v0';
		const FIREBASE_HACKER_NEWS_DATABASE_REF = FIREBAES_HACKER_NEWS.database().ref().child(FIREBASE_HACKER_NEWS_VERSION);
		const FIREBASE_HACKER_NEWS_TOP_STORIES = 'topstories';
		const FIREBASE_HACKER_NEWS_STORY = 'item';

		const HACKER_NEWS_STORY_URL = 'https://news.ycombinator.com/item?id=';

		return {
			getTopStories: getTopStories,
			getStory: getStory,
			getHackerNewsUrl: getHackerNewsUrl
		};

		function getTopStories() {
			const ref = FIREBASE_HACKER_NEWS_DATABASE_REF.child(FIREBASE_HACKER_NEWS_TOP_STORIES);
			const firstTen = ref.limitToFirst(10);
			const obj = $firebaseArray(firstTen);

			return obj;
		}

		function getStory(storyId) {
			const ref = FIREBASE_HACKER_NEWS_DATABASE_REF.child(FIREBASE_HACKER_NEWS_STORY).child(storyId);
			const obj = $firebaseObject(ref);

			return obj;
		}

		function getHackerNewsUrl(storyId) {
			const url = HACKER_NEWS_STORY_URL + storyId;

			return url;
		}
	};

})();