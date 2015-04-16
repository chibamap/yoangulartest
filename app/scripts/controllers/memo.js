'use strict';

/**
 * @ngdoc function
 * @name yoangularApp.controller:MemoCtrl
 * @description
 * # MemoCtrl
 * Controller of the yoangularApp
 */
angular.module('yoangularApp')
	.controller('MemoCtrl', function (Memo, $scope, $timeout) {
		
		$scope.update = false;
		$scope.memo = Memo.getMemo();
		
		var self = this;
		$scope.keyup = function () {
			if (!Memo.compare($scope.memo)) {
				$scope.update = true;
			} else {
				$scope.update = false;
			}
		};
		
		this.interval = function () {
			$timeout(function () {
				Memo.autosave($scope.memo);
				$scope.update = false;
				self.interval();

			}, 500);
		};
		this.interval();
		
		return this;
	});
