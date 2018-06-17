var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newInstance = Object.create(stackMethods);
  newInstance.first = 0;
  newInstance.last = 0;

  return newInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this[this.last] = value;
  this.last++;
};

stackMethods.pop = function() {
  var output = this[this.last - 1];
  this.last--;
  return output;
};

stackMethods.size = function() {
  var size = this.last - this.first;
  return size > 0 ? size : 0;
};


