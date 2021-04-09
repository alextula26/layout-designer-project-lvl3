const gulp = require('gulp');

const styles = require('./styles');
const pug2html = require('./pug2html');
const scripts = require('./scripts');
const images = require('./images');
const spriteSVG = require('./spriteSVG');

const server  = require('browser-sync').create();

module.exports = function serve(cb) {
  server.init({
    server: 'dist',
    notify: false,
    open: true,
    cors: true
  });
  
  gulp.watch(['app/images/**/*.{gif,png,jpg,svg,webp}', '!app/images/icons/**/*'], gulp.series(images)).on('change', server.reload);
  gulp.watch('app/images/icons/svg/*.svg', gulp.series(spriteSVG)).on('change', server.reload);
  gulp.watch('app/scss/**/*.scss', gulp.series(styles, cb => gulp.src('dist/css/*.css').pipe(server.stream()).on('end', cb)));
  gulp.watch('app/pug/**/*.pug', gulp.series(pug2html, cb => gulp.src('dist/*.html').pipe(server.stream()).on('end', cb)));
  gulp.watch('app/js/**/*.js', gulp.series(scripts)).on('change', server.reload); 

  return cb();
}
