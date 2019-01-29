
const PaintCan = require('./paintcan');

const Decorator = function (paintStock = []){
  this.paintStock = paintStock;
};

Decorator.prototype.addCan = function(litres){
  this.paintStock.push(new PaintCan(litres));
};

module.exports = Decorator;
