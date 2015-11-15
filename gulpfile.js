'use strict';

var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    source = require('vinyl-source-stream'),
    browserify = require('browserify'),
    // concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    refresh = require('gulp-livereload'),
    nodemon = require('gulp-nodemon'),
    // gutil = require('gulp-util'),
    clean = require('gulp-clean');

// clean dist
gulp.task('clean', function() {
    return gulp.src('./dist/', {
            read: false
        })
        .pipe(clean({
            force: true
        }));
});

// Start server
var appServer = require('./server');
gulp.task('serve_', function() {
    console.log('Server');
    appServer.startServer();
});

gulp.task('serve', function() {
    nodemon({
            script: 'server.js',
            ext: 'json js',
            ignore: ['public/*', 'client/*']
        })
        .on('change', ['lint'])
        .on('restart', function() {
            console.log('Restarted webserver');
        });
});

// style
gulp.task('styles', function() {
    gulp.src('./app/public/styles/*.scss')
        // The onerror handler prevents Gulp from crashing when you make a mistake in your SASS
        .pipe(sass({
            onError: function(e) {
                console.log(e);
            }
        }))
        // Optionally add autoprefixer
        .pipe(autoprefixer('last 2 versions', '> 1%', 'ie 8'))
        // These last two should look familiar now :)
        .pipe(gulp.dest('./dist/public/css/'));

    gulp.src('./app/public/styles/**/*.scss')
        // The onerror handler prevents Gulp from crashing when you make a mistake in your SASS
        .pipe(sass({
            onError: function(e) {
                console.log(e);
            }
        }))
        // Optionally add autoprefixer
        .pipe(autoprefixer('last 2 versions', '> 1%', 'ie 8'))
        // These last two should look familiar now :)
        .pipe(gulp.dest('./dist/public/css/'));
});

// browserify
gulp.task('browserify', function() {
    // Single point of entry (make sure not to src ALL your files, browserify will figure it out for you)
    var bundleStream = browserify({
        entries: ['./app/appConfig.js'],
        debug: true
    }).bundle().pipe(source('all.js'));
    return bundleStream.pipe(gulp.dest('./dist/public/js'));
});

// views
gulp.task('views', function() {
    // Get our index.html
    gulp.src('./app/index.html')
        // And put it in the public folder
        .pipe(gulp.dest('./dist/'));

    // Any other view files from client/views
    gulp.src('./app/views/**/*.html')
        // Will be put in the public/views folder
        .pipe(gulp.dest('./dist/public/views/'));
});

// jshint
gulp.task('jshint', function() {
    gulp.src('./app/views/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));

    gulp.src('./app/views/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// watch
gulp.task('watch', ['serve', 'jshint'], function() {
    refresh.listen();
    // Watch our scripts
    gulp.watch(['./app/views/*.js', './app/views/**/*.js'], [
        'jshint',
        'browserify'
    ]);

    // Watch our sass files
    gulp.watch(['./app/public/styles/*.scss', './app/public/styles/**/*.scss'], [
        'styles'
    ]);

    // Watch view files
    gulp.watch(['./app/views/**/*.html'], [
        'views'
    ]);
});

// dev deployment
gulp.task('dev', ['clean', 'styles', 'views', 'jshint', 'browserify', 'watch']);

// release deployment
gulp.task('release', []);

gulp.task('default', ['dev']);
