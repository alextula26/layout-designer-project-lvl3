const gulp = require('gulp');
const scss = require('gulp-sass');

module.exports = function styles() {
    return gulp.src('./app/scss/custom.scss')
        .pipe(scss())
        .pipe(gulp.dest('./dist/css/'))
}