const PaintCan = function (capacity){
  this.capacity = capacity;
  this.isEmpty = false;
};

PaintCan.prototype.emptyCan = function(){
  this.capacity = 0;
  this.isEmpty = true;
};

module.exports = PaintCan;
