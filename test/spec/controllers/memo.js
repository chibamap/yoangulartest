'use strict';

describe('Controller: MemoCtrl', function () {

  // load the controller's module
  beforeEach(module('yoangularApp'));

  var MemoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MemoCtrl = $controller('MemoCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
