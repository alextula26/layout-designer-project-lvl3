const gulp = require('gulp');
const pug = require('gulp-pug');

module.exports = function pug2html() {
    return gulp.src('./app/pug/pages/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('./dist/'))
};
