var gulp = require('gulp');

var plugins = require('gulp-load-plugins')({
	pattern: ['gulp-*', 'gulp.*', 'main-bower-files'],
	replaceString: /\bgulp[\-.]/
});

var dest = 'dest/public/';

gulp.task('default', ['js'], function() {
	console.log("Task complete!")
});

gulp.task('js', function() {
	var coreJsFiles = ['client/*'];
	//var appJsFiles = ['client/**'];

	console.log(plugins.mainBowerFiles());

	gulp.src(plugins.mainBowerFiles().concat(coreJsFiles))
		.pipe(plugins.filter('**/*.js'))
		.pipe(plugins.concat('main.js'))
		.pipe(plugins.uglify())
		.pipe(gulp.dest(dest + 'js'));
});
