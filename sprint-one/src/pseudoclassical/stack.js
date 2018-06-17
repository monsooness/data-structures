var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.first = 0;
  this.last = 0;
};

Stack.prototype.push = function(value) {
  this[this.last] = value;
  this.last++;
};

Stack.prototype.pop = function(value) {
  var output = this[this.last - 1];
  this.last--;
  return output;
};

Stack.prototype.size = function(value) {
  var size = this.last - this.first;
  return size > 0 ? size : 0;
};


