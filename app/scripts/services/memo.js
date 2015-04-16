'use strict';

/**
 * @ngdoc service
 * @name yoangularApp.memo
 * @description
 * # memo
 * Factory in the yoangularApp.
 */
angular.module('yoangularApp')
  .factory('Memo', function ($localStorage) {
    // Service logic
    // ...
		$localStorage.$default({memo:""});

		var current = $localStorage.memo;

    // Public API here
    return {
			compare: function(memo){
				return current == memo;
			},
			autosave: function(memo){
				if (current !== memo) {
					$localStorage.memo = memo;
					current = memo;
				}
			},
			getMemo: function(){
				current = $localStorage.memo;
				return current;
			}
    };
  });
