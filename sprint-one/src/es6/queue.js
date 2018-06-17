class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  constructor() {
    this.first = 0;
    this.last = 0;
  }

  enqueue(value) {
    this[this.last] = value;
    this.last++;
  }

  dequeue() {
    var output = this[this.first];
    this.first++;
    return output;
  }

  size() {
    var size = this.last - this.first;
    return size > 0 ? size : 0;
  }

}

var newInstance = new Queue();


