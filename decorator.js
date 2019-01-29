
const PaintCan = require('./paintcan');

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

module.exports = Decorator;
