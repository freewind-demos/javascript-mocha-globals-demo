const expect = require('chai').expect;

describe('mocha', function () {
  it('should find global hello correctly', function () {
    hello = 'Hello, mocha';
    expect(hello).to.eq('Hello, mocha')
  })
});
