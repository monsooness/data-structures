var Queue = function() {
  var someInstance = {};
  var first = 0;
  var last = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[last] = value;
    last++;
  };

  someInstance.dequeue = function() {
    var output = storage[first];
    first++;
    return output;
  };

  someInstance.size = function() {
    var size = last - first;
    return size > 0 ? size : 0;
  };

  return someInstance;
};
