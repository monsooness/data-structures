var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.first = 0;
  this.last = 0;

};

Queue.prototype.enqueue = function(value) {
  this[this.last] = value;
  this.last++;
};

Queue.prototype.dequeue = function() {
  var output = this[this.first];
  this.first++;
  return output;
};

Queue.prototype.size = function() {
  var size = this.last - this.first;
  return size > 0 ? size : 0;
};


