'use strict';
var gulp = require('gulp');

require('require-dir')('./gulp_tasks/tasks');

gulp.task('default', [
    'webpack',
    'sass',
    'sass-watch',
    'webpack-watch'
]);
