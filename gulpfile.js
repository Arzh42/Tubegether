var gulp = require('gulp');
var less = require('gulp-less');
var minifyCSS = require('gulp-csso');

gulp.task('css', function(){
	return gulp.src('public/stylesheets/less/*.less')
		.pipe(less())
    	//.pipe(minifyCSS())
		.pipe(gulp.dest('public/stylesheets'))
});
gulp.task('default', function() {
	gulp.watch('public/stylesheets/less/*.less',['css']);
});