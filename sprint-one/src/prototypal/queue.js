var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newInstance = Object.create(queueMethods);
  newInstance.first = 0;
  newInstance.last = 0;

  return newInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this[this.last] = value;
  this.last++;
};

queueMethods.dequeue = function() {
  var output = this[this.first];
  this.first++;
  return output;
};

queueMethods.size = function() {
  var size = this.last - this.first;
  return size > 0 ? size : 0;
};
