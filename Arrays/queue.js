// implement queue using stack;

function Queue() {
  this.stack1 = [];
  this.stack2 = []
}

Queue.prototype.enqueue = function (val) {
  this.stack1.push(val);
}

Queue.prototype.dequeue = function () {
  if (this.stack2.length === 0) {
    while (this.stack1.length !== 0) {
      this.stack2.push(this.stack1.pop());
    }
    return this.stack2.pop();
  } else {
    return this.stack2.pop()
  }
}



// implement stack using queue

function Stack() {
  this.queue1 = [];
  this.queue2 = [];
}

Stack.prototype.push = function(val) {
  this.queue2.push(val);
  while(this.queue1.length !== 0) {
    this.queue2.push(this.queue1.shift());
  }
  let temp = this.queue1;
  this.queue1 = this.queue2;
  this.queue2 = temp;
}

Stack.prototype.pop = function() {
  return this.queue1.shift()
}

var stack = new Stack();
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5);
console.log('dequeue ', stack.pop());
stack.push(6);
stack.push(7);
console.log('dequeue ', stack.pop());

