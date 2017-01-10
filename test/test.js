'use strict';

const expect = require('chai').expect;
const plusOneSum = require("../script.js");

describe('plusOneSum', function() {
    it('Should return the sum of the elements, with plus one on each element.', function() {
      expect(plusOneSum([1,2,3,4])).to.equal(14);
  });
});
