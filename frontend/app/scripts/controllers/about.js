'use strict';

/**
 * @ngdoc function
 * @name moodFrontApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the moodFrontApp
 */
angular.module('moodFrontApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
