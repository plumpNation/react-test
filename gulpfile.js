var browserify = require('browserify');
var source = require('vinyl-source-stream');
var watchify = require('watchify');
var gulp = require('gulp');
var rename = require('gulp-rename');

var startFile = './src/index.js';
var buildFolder = './build';
var bundleName = 'bundle.js';

var bundleShare = function (b) {
  console.log('Bundling...');

  b.bundle()
    .pipe(source(startFile))
    .pipe(rename(bundleName))
    .pipe(gulp.dest(buildFolder));
};

var browserifyShare = function (){
  // you need to pass these three config option to browserify
  var b = browserify({
    cache: {},
    packageCache: {},
    fullPaths: true
  });

  b = watchify(b);

  b.add(startFile);

  b.on('update', function () {
    console.log('Changes detected');
    bundleShare(b);
  });

  bundleShare(b);
};

gulp.task('default', function(){
  browserifyShare();
});
