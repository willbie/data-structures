var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.num = 0;
};

Stack.prototype = {
  push : function(value) {
    this.storage[this.num] = value;
    this.num++;
  },

  pop : function() {
    var popped = this.storage[this.num - 1]
    delete this.storage[this.num - 1];
    this.num--;
    return popped;
  },

  size : function() {
    var length = 0;
    for (var key in this.storage) {
      length = length + 1;
    }
    return length;
  }
}
