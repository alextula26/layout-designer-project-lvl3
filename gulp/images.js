const gulp = require('gulp');

module.exports = function images() {
    return gulp.src('./app/images/**/*')
        .pipe(gulp.dest('./dist/images/'))
};
