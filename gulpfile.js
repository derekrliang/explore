var gulp = require('gulp');

var plugins = require('gulp-load-plugins')({
	pattern: ['gulp-*', 'gulp.*', 'main-bower-files'],
	replaceString: /\bgulp[\-.]/
});

var src = 'client/';
var dest = 'dest/public/';

var jsFiles = [src + '**/*.js'];
var jsFilesAndPackages = plugins.mainBowerFiles().concat(jsFiles);
var scssFiles = [src + '**/*.scss'];
var imageFiles = [src + '**/images/*.js'];

console.log(jsFilesAndPackages);

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
	gulp.src(jsFilesAndPackages)
		.pipe(plugins.filter('**/*.js'))
		.pipe(plugins.environments.development(plugins.sourcemaps.init()))
		.pipe(plugins.concat('main.js'))
		.pipe(plugins.environments.development(plugins.sourcemaps.write('.')))
		.pipe(plugins.environments.production(plugins.uglify()))
		.pipe(gulp.dest(dest + 'js'))
		.pipe(plugins.livereload());
});

gulp.task('scss', function() {
	return;
});

gulp.task('images', function() {
	return;
});

gulp.task('callback', function(cb) {
	plugins.watch(jsFiles, function() {
		console.log('js changed');
	});
});

gulp.task('watch', function() {
	plugins.livereload.listen();

	gulp.watch(jsFilesAndPackages, ['js']);
	gulp.watch(scssFiles, ['sass']);
	gulp.watch(imageFiles, ['images']);
 });