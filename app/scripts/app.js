'use strict';

/**
 * @ngdoc overview
 * @name yoangularApp
 * @description
 * # yoangularApp
 *
 * Main module of the application.
 */
angular
  .module('yoangularApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
		'ngStorage',
		'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/todo', {
        templateUrl: 'views/todo.html',
        controller: 'TodoCtrl as todoList'
      })
			.when('/memo', {
				templateUrl: 'views/memo.html',
			controller: 'MemoCtrl as memo'
			})
      .otherwise({
        redirectTo: '/'
      });
  })
//	.run(function () {
		// TODO: something
//	})
	;
