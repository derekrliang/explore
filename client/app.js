'use strict';

console.log("Initialized scripts!");

var app = angular.module('app', ['ngRoute', 'firebase']);

app.config(function() {
	let hackerNewsFirebaseConfig = {
	    apiKey: 'AIzaSyBzlpinHHwpHka1H4E1RjcmFZuhql-vCKY',
	    databaseURL: 'https://hacker-news.firebaseio.com',
	    storageBucket: ''
	};

	firebase.initializeApp(hackerNewsFirebaseConfig, 'hackerNewsFirebase');
});