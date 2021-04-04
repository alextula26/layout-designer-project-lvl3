const gulp = require('gulp');
const plumber = require('gulp-plumber');
const scss = require('gulp-sass');
const shorthand = require('gulp-shorthand');
const gulpStylelint = require('gulp-stylelint');

module.exports = function styles() {
  return gulp.src('./app/scss/custom.scss')
    .pipe(plumber())
    .pipe(scss())
    .pipe(shorthand())
    .pipe(gulpStylelint({
      fix: true,
      failAfterError: false,      
      reporters: [ { formatter: 'string', console: true } ],
      debug: true
    }))    
    .pipe(gulp.dest('./dist/css/'))
}