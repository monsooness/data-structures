var extend = function(obj1, obj2) {
  for (var key in obj2) {
    obj1[key] = obj2[key];
  }
};

var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {
    first: 0,
    last: 0
  };

  extend(obj, queueMethods); 
  return obj;
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

//test


