var gulp = require('gulp');

var plugins = require('gulp-load-plugins')({
	pattern: ['gulp-*', 'gulp.*', 'main-bower-files'],
	replaceString: /\bgulp[\-.]/
});

var src = 'client/';
var dest = 'dest/public/';

gulp.task('default', ['build', 'watch', 'start'], function() {
	console.log('Task complete!');
});

gulp.task('start', function() {
	console.log('Launching electron!');
	return plugins.run('electron server/main.js').exec();
});

gulp.task('build', ['js', 'scss', 'images'], function() {
	console.log("Building...");
});

gulp.task('js', function() {
	var jsFiles = [src + '**.js'];

	gulp.src(plugins.mainBowerFiles().concat(jsFiles))
		.pipe(plugins.filter('**/*.js'))
		.pipe(plugins.concat('main.js'))
		//.pipe(plugins.uglify())
		.pipe(gulp.dest(dest + 'js'))
		.pipe(plugins.livereload());
});

gulp.task('scss', function() {
	return;
});

gulp.task('images', function() {
	return;
});

gulp.task('watch', function() {
	plugins.livereload.listen();
	gulp.watch(src + '**.js', ['js']);
	//gulp.watch(src + 'client/scss/*.scss', ['sass']);
	//gulp.watch(src + 'client/images/**/*', ['images']);
 });