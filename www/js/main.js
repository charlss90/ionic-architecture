'use strict';
var angular = require('angular');
require('angular-ui-router');
require('angular-animate');
require('angular-sanitize');
require('ionic');
require('ionic-angular');

var runDeps = [
    '$ionicPlatform'
];

function run($ionicPlatform) {
    $ionicPlatform.ready(function() {

        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
}

run.$inject = runDeps;

var configDeps = [
    '$stateProvider', '$urlRouterProvider'
];

function config($stateProvider, $urlRouterProvider) {
    $stateProvider.state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    }).state('app.search', {
        url: '/search',
        views: {
            'menuContent': {
                templateUrl: 'templates/search.html'
            }
        }
    }).state('app.browse', {
        url: '/browse',
        views: {
            'menuContent': {
                templateUrl: 'templates/browse.html'
            }
        }
    }).state('app.playlists', {
        url: '/playlists',
        views: {
            'menuContent': {
                templateUrl: 'templates/playlists.html',
                controller: 'PlaylistsCtrl'
            }
        }
    }).state('app.single', {
        url: '/playlists/:playlistId',
        views: {
            'menuContent': {
                templateUrl: 'templates/playlist.html',
                controller: 'PlaylistCtrl'
            }
        }
    });


    $urlRouterProvider.otherwise('/app/playlists');
}
config.$inject = configDeps;

angular.module('starter', [
    'ionic',
    require('./controllers')
]).run(run).config(config);
