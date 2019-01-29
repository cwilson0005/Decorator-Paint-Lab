const assert = require('assert');
const PaintCan = require('../paintcan');

describe("Paint Can", function() {

  let paintCan;

  beforeEach(function() {
    paintCan = new PaintCan(3);
  });

  it("should have a capacity", function() {
    const actual = paintCan.capacity;
    assert.strictEqual(actual, 3);
  });

  it("shouldn't be empty", function() {
    const actual = paintCan.isEmpty;
    assert.strictEqual(actual, false);
  });

  it("should be empty", function() {
    paintCan.emptyCan();
    const actual = paintCan.isEmpty;
    assert.strictEqual(actual, true);
  });

});
