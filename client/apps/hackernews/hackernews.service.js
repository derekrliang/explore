'use strict';

(function() {

	angular.module('app').factory('HackerNewsService', HackerNewsService);

	HackerNewsService.$inject = ['$firebaseObject', '$firebaseArray'];

	function HackerNewsService($firebaseObject, $firebaseArray) {

		const FIREBAES_HACKER_NEWS = firebase.app('hackerNewsFirebase');
		const FIREBASE_HACKER_NEWS_VERSION= 'v0';
		const FIREBASE_HACKER_NEWS_DATABASE_REF = FIREBAES_HACKER_NEWS.database().ref().child(FIREBASE_HACKER_NEWS_VERSION);
		const FIREBASE_HACKER_NEWS_TOP_STORIES = 'topstories';
		const FIREBASE_HACKER_NEWS_STORY = 'item';

		return {
			getTopStories: getTopStories,
			getStory: getStory
		};

		function getTopStories() {
			let ref = FIREBASE_HACKER_NEWS_DATABASE_REF.child(FIREBASE_HACKER_NEWS_TOP_STORIES);
			let firstTen = ref.limitToFirst(10);
			var obj = $firebaseArray(firstTen);

			return obj;
		}

		function getStory(storyId) {
			let ref = FIREBASE_HACKER_NEWS_DATABASE_REF.child(FIREBASE_HACKER_NEWS_STORY).child(storyId);
			var obj = $firebaseObject(ref);

			return obj;
		}
	};

})();