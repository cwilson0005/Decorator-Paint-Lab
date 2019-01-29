
const PaintCan = require('./paintcan');
const Room = require('./room');

const Decorator = function (paintStock = []){
  this.paintStock = paintStock;
};

Decorator.prototype.addCan = function(litres){
  this.paintStock.push(new PaintCan(litres));
};

Decorator.prototype.calcStockLitres = function(){
  let total = 0;
  for (let can of this.paintStock){
    total += can.capacity;
  }
  return total;
};

Decorator.prototype.enoughPaint = function(room){
  if (room.area <= this.calcStockLitres()){
    return true;
  }else{
    return false;
  }
};

Decorator.prototype.paintRoom = function(room){
  if (this.enoughPaint(room)){
    room.paintStart = true;
    room.paintFinish = true;
  }else{
    room.paintStart = true;
  }
  return room.paintFinish;
};

module.exports = Decorator;
