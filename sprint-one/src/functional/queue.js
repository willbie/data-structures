var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var num = 0;
  var pop = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[num] = value;
    num++;
  };

  someInstance.dequeue = function() {
    var popped = storage[pop];
    delete storage[pop];
    pop++;
    return popped;
  };

  someInstance.size = function() {
    var length = 0
    for (var key in storage) {
      length = length + 1;
    }
    return length;
  };

  return someInstance;
};
