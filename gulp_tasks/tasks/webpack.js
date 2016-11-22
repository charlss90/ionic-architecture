'use strict';
var gulp = require('gulp');
var webpack = require('webpack-stream');
var dirs = require('../common/dirs');


gulp.task('webpack', function() {
    return gulp.src(dirs.js.filePath)
        .pipe(webpack(require('../../webpack.config.js')))
        .pipe(gulp.dest(dirs.js.output.dirname));
});


gulp.task('webpack-watch', function () {
    gulp.watch(dirs.js.watchFiles, ['webpack']);
});
