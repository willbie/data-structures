var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  obj.storage = {};
  obj.num = 0;
  obj.pop = 0;
  _.extend(obj, Queue.queueMethods)
  return obj;
};

Queue.queueMethods = {};

Queue.queueMethods.enqueue = function(value) {
  this.storage[this.num] = value;
  this.num++;
};

Queue.queueMethods.dequeue = function() {
  var popped = this.storage[this.pop];
  delete this.storage[this.pop];
  this.pop++;
  return popped;
};

Queue.queueMethods.size = function() {
  var length = 0
  for (var key in this.storage) {
    length = length + 1;
  }
  return length;
};


