'use strict';

describe('Service: memo', function () {

  // load the service's module
  beforeEach(module('yoangularApp'));

  // instantiate service
  var memo;
  beforeEach(inject(function (_memo_) {
    memo = _memo_;
  }));

  it('should do something', function () {
    expect(!!memo).toBe(true);
  });

});
