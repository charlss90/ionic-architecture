'use strict';
var path = require('path');
var webpack = require('webpack');
var dirs = require('./gulp_tasks/common/dirs');

var webpackConfig = {
    entry: dirs.filePath,
    output: {
        path: dirs.js.output.dirname,
        filename: dirs.js.output.filename
    },
    resolve: {
        alias: {
            'ionic': 'ionic-sdk/release/js/ionic.js',
            'ionic-angular': 'ionic-sdk/release/js/ionic-angular.js'
        },
        root: [
            path.resolve(path.join(__dirname, 'node_modules')),
            path.resolve(path.join(__dirname, 'www/lib'))
        ],
        modulesDirectories: ['node_modules', 'www/lib']
    },
    plugins: [
        new webpack.ResolverPlugin([
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('package.json', ['browser', 'main']),
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
        ])
    ]
};

module.exports = webpackConfig;
