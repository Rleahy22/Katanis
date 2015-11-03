var gulp     = require('gulp');
var connect  = require('gulp-connect');
var Server   = require('karma').Server;

gulp.task('test', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});

gulp.task('connect', function() {
  connect.server();
});