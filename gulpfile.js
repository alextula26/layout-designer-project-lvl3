const gulp = require('gulp');
const pug2html = require('./gulp/pug2html');
const styles = require('./gulp/styles');
const scripts = require('./gulp/scripts');
const images = require('./gulp/images');
const spriteSVG = require('./gulp/spriteSVG');
const clean = require('./gulp/clean');
const serve = require('./gulp/serve');

const { series, parallel } = gulp;

const dev = parallel(pug2html, styles, scripts, images, spriteSVG);

exports.pug2html = pug2html;
exports.styles = styles;
exports.scripts = scripts;
exports.images = images;
exports.spriteSVG = spriteSVG;
exports.clean = clean;
exports.serve = serve;

exports.default = series(clean, dev);
