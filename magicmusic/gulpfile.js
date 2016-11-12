var PATHS = {
    app:            './',
    node_modules:   './node_modules/',
    styles:     './app/styles/',

    angular:'./node_modules/angular/angular.js',
    angularAria:'./node_modules/angular-aria/angular-aria.js',
    angularAnimate:'./node_modules/angular-animate/angular-animate.js',
    angularMsg:'./node_modules/angular-messages/angular-messages.js',
    angularRoute:'./node_modules/angular-route/angular-route.js',
    angularM:'./node_modules/angular-material/angular-material.js',
    angularMCss:'./node_modules/angular-material/angular-material.css'

};

var path = require('path');
var gulp = require('gulp');
var webserver = require('gulp-webserver');
var sass = require('gulp-sass');
var build = require('gulp-build');

gulp.task('default', function() {
  console.log('default task')
});

gulp.task('webserver',function(){
  gulp.src([PATHS.app, PATHS.node_modules])
    .pipe(webserver({
      defaultFile: 'index.html',
      livereload: true,
      directoryListing: {
        enable: true,
      },
      open: true,
    }));
});

gulp.task('sass', function () {
  return gulp.src('./app/styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app/styles/'));
});

gulp.task('build', function() {
  gulp.src('js/*.js',PATHS.angular, PATHS.angularAria, 
    PATHS.angularAnimate, PATHS.angularMsg, PATHS.angularRoute, 
    PATHS.angularM, PATHS.angularMCss)
      .pipe(build({ GA_ID: '123456' }))
      .pipe(gulp.dest('dist'))
});


gulp.task('watch', function () {
   gulp.watch('./app/styles/*.scss', ['sass']);
});
