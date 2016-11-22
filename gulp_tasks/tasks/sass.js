'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');

var dirs = require('../common/dirs');


gulp.task('sass', function(done) {
    console.log(dirs.styles.filename);
    gulp.src('./scss/ionic.app.scss')
        .pipe(sass())
        .on('error', sass.logError)
        .pipe(gulp.dest(dirs.styles.output.dirname))
        .pipe(minifyCss({
            keepSpecialComments: 0
        }))
        .pipe(rename({
            extname: '.min.css'
        }))
        .pipe(gulp.dest(dirs.styles.output.dirname))
        .on('end', done);
});


gulp.task('sass-watch', function() {
    return gulp.watch(dirs.styles.sass, ['sass']);
});
