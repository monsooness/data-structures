var extend = function(obj1, obj2) {
  for (var key in obj2) {
    obj1[key] = obj2[key];
  }
};

var Stack = function() {
  var obj = {
    last: 0,
    first: 0
  };

  extend(obj, stackMethods);
  return obj;
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

