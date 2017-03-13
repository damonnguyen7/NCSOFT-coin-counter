var gulp = require('gulp');
var gulp_utility = require('gulp-util');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var babelify = require('babelify');
var less = require('gulp-less');
var mocha = require('gulp-mocha');

// Gulp tasks:
gulp.task('scripts', function () {
    bundleApp(false);
});

gulp.task('deploy', function (){
  bundleApp(true);
});

gulp.task('compile_less', function() {
  return gulp.src('./less_src/styles.less')
  .pipe(less())
  .pipe(gulp.dest('./public/stylesheets'));
});

gulp.task('watch', function () {
  gulp.watch(['./react/*.js'], ['scripts']);
  gulp.watch(['./less_src/*.less'], ['compile_less']);
});

// When running 'gulp' on the terminal this task will fire.
gulp.task('default', ['scripts', 'compile_less']);


// External dependencies you do not want to rebundle while developing,
// but include in your application deployment
var dependencies = [
  'react',
  'react-dom'
];

// keep a count of the times a task refires
var scriptsCount = 0;

function bundleApp(isProduction) {
  scriptsCount++;
  // Browserify will bundle all our js files together in to one and will let
  // us use modules in the front end.
  var appBundler = browserify({
      entries: ['./react/index.js'],
      debug: true
    })

  // If it's not for production, a separate vendors.js file will be created
  // the first time gulp is run so that we don't have to rebundle things like
  // react everytime there's a change in the js file
  if (!isProduction && scriptsCount === 1){
    // create vendors.js for dev environment.
    browserify({
      require: dependencies,
      debug: true
   })
    .bundle()
    .on('error', gulp_utility.log)
    .pipe(source('vendors.js'))
    .pipe(gulp.dest('./public/javascripts/'));
  }

  if (!isProduction){
    // make the dependencies external so they dont get bundled by the
    // app bundler. Dependencies are already bundled in vendor.js for
    // development environments.
    dependencies.forEach(function(dep){
      appBundler.external(dep);
    })
  }

  appBundler
    // transform ES6 and JSX to ES5 with babelify
    .transform("babelify", {presets: ["es2015", "react", "stage-2"]})
    .bundle()
    .on('error',gulp_utility.log)
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./public/javascripts/'));
}
