const gulp = require('gulp');
const plumber = require('gulp-plumber');

module.exports = function images() {
  return gulp.src('app/images/**/*')
    .pipe(plumber())
    .pipe(gulp.dest('dist/images/'))
};
