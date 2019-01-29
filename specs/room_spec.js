const assert = require('assert');
const Room = require('../room');

describe("Room", function() {

  let room;

  beforeEach(function() {
    room = new Room(15);
  });

  it("should have an area", function() {
    const actual = room.area;
    assert.strictEqual(actual, 15);
  });

  it("should have not started painting", function() {
    const actual = room.paintStart;
    assert.strictEqual(actual, false);
  });

  it("should have not finished painting", function() {
    const actual = room.paintFinish;
    assert.strictEqual(actual, false);
  });

});
