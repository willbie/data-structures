var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var num = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[num] = value;
    num = num + 1
  };

  someInstance.pop = function() {
    var popped = storage[num - 1]
    delete storage[num - 1];
    num = num - 1;
    return popped
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

