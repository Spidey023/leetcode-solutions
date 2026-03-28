
var MinStack = function() {
    this.stack = [];
};

MinStack.prototype.push = function(val) {
    if (this.stack.length === 0) {
        this.stack.push([val, val]);
    } else {
        let min = Math.min(val, this.getMin());
        this.stack.push([val, min]);
    }
};

MinStack.prototype.pop = function() {
    this.stack.pop();
};

MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1][0];
};

MinStack.prototype.getMin = function() {
    return this.stack[this.stack.length - 1][1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */