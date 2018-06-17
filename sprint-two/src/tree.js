var Tree = function(value) {
  var newTree = {};

  newTree.value = value;
  newTree.children = []; // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  var output = false;

  //basecase
  if (this.value === target) {
    output = true;
  }
  //recursive case
  if (this.children.length > 0) {
    for (var i = 0; i < this.children.length; i++) {
      output = output || this.children[i].contains(target);
    }
  }
  return output;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

