const gulp = require('gulp');
const scss = require('gulp-sass');
const plumber = require('gulp-plumber');

module.exports = function styles() {
  return gulp.src('./app/scss/custom.scss')
    .pipe(plumber())
    .pipe(scss())
    .pipe(gulp.dest('./dist/css/'))
}