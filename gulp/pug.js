const gulp = require('gulp');
const pug = require('gulp-pug');
const plumber = require('gulp-plumber');
const pugLinter = require('gulp-pug-linter');

module.exports = function pug2html() {
  return gulp.src('./app/pug/pages/*.pug')
    .pipe(plumber())
    .pipe(pugLinter({ reporter: 'default' }))
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('./dist/'))
};
