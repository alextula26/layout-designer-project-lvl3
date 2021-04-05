const gulp = require('gulp');

const styles = require('./styles');
const pug2html = require('./pug2html');

const server  = require('browser-sync').create();

module.exports = function serve(cb) {
  server.init({
    server: 'dist',
    notify: false,
    open: true,
    cors: true
  });

  gulp.watch('app/scss/**/*.scss', gulp.series(styles, cb => gulp.src('dist/css/*.css').pipe(server.stream()).on('end', cb)));
  gulp.watch('app/pug/**/*.pug', gulp.series(pug2html, cb => gulp.src('dist/*.html').pipe(server.stream()).on('end', cb)));

  return cb();
}
