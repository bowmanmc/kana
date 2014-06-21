'use strict';

var app = angular.module('kaApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
]);

app.config(function ($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: 'modules/home/kaHome.html',
        controller: 'kaHomeController'
    })
    .when('/viewer', {
        templateUrl: 'modules/viewer/kaCardViewer.html',
        controller: 'kaCardViewerController'
    })
    .otherwise({
        redirectTo: '/'
    });
});
