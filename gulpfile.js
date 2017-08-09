var gulp = require('gulp');

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var cleanCss = require('gulp-clean-css');
var browserSync = require('browser-sync');

gulp.task('script', function () {
  gulp.src('src/js/*.js')
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(rename('app.min.js'))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('style', function () {
  gulp.src('src/css/app.scss')
    .pipe(sass())
    .pipe(cleanCss())
    .pipe(rename('app.min.css'))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('default', ['script', 'style']);

gulp.task('watch', ['script', 'style', 'reload'], function () {
  gulp.watch('src/css/*.scss', ['style']);
  gulp.watch('src/js/*.js', ['script']);
});

gulp.task('reload', function () {
  browserSync.init(['dist/css/**.css', 'dist/js/**.js', 'index.html'], {
    server: './'
  });
});
