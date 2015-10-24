var gulp = require('gulp'),
    gutil = require('gulp-util'),
    jshint = require('gulp-jshint'),
    browserify = require('gulp-browserify'),
    concat = require('gulp-concat'),
    clean = require('gulp-clean');

// Start server
var appServer = require('./server');
gulp.task('serve_', function() {
    console.log('Server');
    expressServer.startServer();
});

gulp.task('serve', function() {
    nodemon({
            script: 'server.js',
            ext: 'json js',
            ignore: ['public/*', 'client/*']
        })
        .on('change', ['lint'])
        .on('restart', function() {
            console.log('Restarted webserver')
        });
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

// browserify
gulp.task('browserify', function() {
    // Single point of entry (make sure not to src ALL your files, browserify will figure it out for you)
    gulp.src(['./app/appConfig.js'])
        .pipe(browserify({
            insertGlobals: true,
            debug: true
        }))
        // Bundle to a single file
        .pipe(concat('bundle.js'))
        // Output it to our dist folder
        .pipe(gulp.dest('dist/js'));
});

// watch
gulp.task('watch', ['jshint'], function() {
    // Watch our scripts
    gulp.watch(['./app/views/*.js', './app/views/**/*.js'], [
        'jshint',
        'browserify'
    ]);
});

// dev deployment
gulp.task('dev', []);

// release deployment
gulp.task('release', []);

gulp.task('default', ['dev']);
