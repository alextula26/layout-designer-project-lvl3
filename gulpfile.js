const gulp = require('gulp');
const pug2html = require('./gulp/pug');

exports.default = gulp.series(pug2html);
