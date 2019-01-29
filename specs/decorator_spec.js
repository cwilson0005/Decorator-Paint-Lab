const assert = require('assert');
const Decorator = require('../decorator');
const Room = require('../room');

describe("Decorator", function() {

  let decorator;

  beforeEach(function() {
    decorator = new Decorator();
  });

  it("should have no paint in stock", function() {
    const actual = decorator.paintStock.length;
    assert.strictEqual(actual, 0);
  });

  it("should have added can to stock", function() {
    decorator.addCan(3);
    const actual = decorator.paintStock.length;
    assert.strictEqual(actual, 1);
  });

  it("should have calculated total litres", function() {
    decorator.addCan(3);
    decorator.addCan(4);
    decorator.addCan(6);
    const actual = decorator.calcStockLitres();
    assert.strictEqual(actual, 13);
  });

  it("should have enough paint", function() {
    decorator.addCan(15);
    const actual = decorator.enoughPaint(new Room(15));
    assert.strictEqual(actual, true);
  });

  it("shouldn't have enough paint", function() {
    decorator.addCan(14);
    const actual = decorator.enoughPaint(new Room(15));
    assert.strictEqual(actual, false);
  });

  it("should paint the room with enough paint", function() {
    decorator.addCan(15);
    const actual = decorator.paintRoom(new Room(15));
    assert.strictEqual(actual, true);
  });

});
