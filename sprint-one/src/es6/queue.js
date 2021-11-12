class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  this.storage = {};
  this.num = 0;
  this.pop = 0;
  }

  enqueue(value) {
    this.storage[this.num] = value;
    this.num++;
  };

  dequeue() {
    var popped = this.storage[this.pop];
    delete this.storage[this.pop];
    this.pop++;
    return popped;
  };

  size() {
    var length = 0
    for (var key in this.storage) {
      length = length + 1;
    }
    return length;
  }
}
