const gulp = require('gulp');
const pug2html = require('./gulp/pug');
const styles = require('./gulp/styles');

const { series } = gulp;

exports.default = series(pug2html, styles);
