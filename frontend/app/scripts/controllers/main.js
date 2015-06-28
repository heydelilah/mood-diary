'use strict';

/**
 * @ngdoc function
 * @name moodFrontApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the moodFrontApp
 */
angular.module('moodFrontApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
