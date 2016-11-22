'use strict';
var path = require('path');

var projectDir = path.resolve(__dirname, '../../');
var appDir = path.resolve(projectDir, 'www');
var jsDir = path.resolve(appDir, 'js');
var jsFilename = 'main.js';
var js = {
    dirname: jsDir,
    filePath: path.resolve(jsDir, jsFilename),
    filename: jsFilename,
    watchFiles: [path.join(jsDir, '**/*.js')],
    output: {
        dirname: path.resolve(appDir, 'dist'),
        filename: 'bundle.js'
    }
};

var cssDir = path.resolve(appDir, 'dist');
var styles = {
    filename: path.resolve(projectDir, 'scss/ionic.app.scss'),
    sass: [path.join(projectDir, 'scss/**/*.scss')],
    output: {
        dirname: cssDir,
        filename: path.resolve(cssDir, 'ionic.app.css')
    }
};

module.exports = {
    js: js,
    styles: styles
};
