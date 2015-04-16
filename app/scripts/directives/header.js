'use strict';

/**
 * @ngdoc directive
 * @name yoangularApp.directive:header
 * @description
 * # header
 */
angular.module('yoangularApp')
  .directive('header', function () {

    return {
      templateUrl: 'views/header.html',
			scope: {name:'&', age:'&'},
			controller: function () {
			}
    };
  });
