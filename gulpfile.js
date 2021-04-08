const gulp = require('gulp');
const clean = require('./gulp/clean');
const pug2html = require('./gulp/pug2html');
const styles = require('./gulp/styles');
const images = require('./gulp/images');
const serve = require('./gulp/serve');
const scripts = require('./gulp/scripts');

const { series, parallel } = gulp;

const dev = parallel(pug2html, styles, scripts, images);

exports.default = series(clean, dev, serve);
