'use strict';

/**
 * @ngdoc overview
 * @name moodFrontApp
 * @description
 * # moodFrontApp
 *
 * Main module of the application.
 */
angular
  .module('moodFrontApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
