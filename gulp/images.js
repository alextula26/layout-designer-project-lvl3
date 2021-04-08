const gulp = require('gulp');
const plumber = require('gulp-plumber');

module.exports = function images() {
    return gulp.src('./app/images/content/**/*.{gif,png,jpg,webp}')
        .pipe(plumber())
        .pipe(gulp.dest('./dist/images/content/'))
};
