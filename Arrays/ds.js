//implement linklist

function Linklist() {
  this.head = null;
}

Linklist.prototype.push = function(val) {
  var node = {
    value: val,
    next: null
  };
  if (!this.head) {
    this.head = node;
    return
  }
  let current = this.head;
  while(current.next) {
    current = current.next;
  }
  current.next = node;
}

// remove nth node from link list
Linklist.prototype.remove = function(n) {
var temp = {};
let i = 1;
if (!this.head) {alert('Link list not present'); return }
let current = this.head;
let prev = this.head;
if (n===1) {
  this.head = null;
} else {
  while(i < n && current.next) {
    prev = current;
    current = current.next;
    i++;
  }
  prev.next = current.next;
}
}


// Reverse a link list 

function reverseLinklist(linkList) {
  let previous = linkList.head;
  let current = previous.next;
  let next = current.next;
  while(next) {
    current.next = previous;
    previous = current;
    current = next;
    next = current.next;
  }
  linkList.head.next = null;
  current.next = previous;
  
  linkList.head = current;
  return linkList
}

function getLengthOfLL(linkList) {
  let current  = linkList.head;
  let n = 0;
  if(!linkList.head) return 0;
  while(current) {
    current = current.next;
    n++
  }
  return n;
}

// kth node from end

function getKthNodeFromEnd(linkList, k) {
  let current = linkList.head;
  const llLength = getLengthOfLL(linkList);
  let n = 1;
  while(n < llLength - k + 1 && current.next) {
    current = current.next;
    n++;
  }
  return current.value;
}

function pushInSortedSL(linkList, val) {
  let current = linkList.head;
  let prev = linkList.head;
  if(current.value > val) {
    linkList.head = {value: val, next: current}
  }
  while(current && (current.value < val)) {
    prev= current;
    current = current.next
  }
  prev.next = {value: val};
  prev.next.next = current;
  console.log(linkList.head.next.value)
  return linkList
}

// var linkList = new Linklist();
// linkList.push(3);
// linkList.push(5);
// linkList.push(6);
// console.log('kthnode of linklist', pushInSortedSL(linkList, 4));
// doubly link list

function DoublyLinkList() {
  this.head = null;
}

DoublyLinkList.prototype.push = function(val) {
  var node = {
    value: val,
    next: null,
    previous: null
  };
  if (!this.head) {
    this.head = node;
  } else {
    let current = this.head;
    while(current.next){
      current = current.next;
    }
    current.next = {value: val, next: null, previous: current};
  }
}

// var dlList = new DoublyLinkList();
// dlList.push(2);
// dlList.push(4);
// console.log('douly link', dlList, dlList.head.next.previous.value);


// make a tree

function TreeNode(val) {
  this.value = val;
  this.left = null;
  this.right = null;
}

function Tree() {
  this.root = null;
}

// insert a node in BST

Tree.prototype.insert = function (val) {
  const newNode = new TreeNode(val);
if (!this.root) {
  this.root = newNode;
} else {
  let current = this.root;
  while(true){
    if(val < current.value) {d
      if (!current.left) {
        current.left = newNode;
        return this;
      } else{
        current = current.left;
      }
    } else if(val > current.value) {
      if(!current.right) {
        current.right = newNode;
        return this;
      } else {
        current = current.right;
      }
    }
  }
}
}

// preorder traversal
    //       5
    //   6       8
    // 7   2   1    9

// BFS printing;
// [5]

function bfsTraversal() {
  let queue = [];
  queue.push(this.root);
  while(queue.length >= 0) {
    const current = queue.shift();
    console.log(current);
    current.left && queue.push(current.left);
    current.right && queue.push(current.right);
  }
}

function preorderTraversal(tree) {
  if (!tree) {
    return
  }
  console.log(tree.value);
  preorderTraversal(tree.left);
  preorderTraversal(tree.right);
}

// var tree = new Tree(6)
// var node1 = new Tree(5);
// tree.leftChild = node1;
// tree.rightChild = new Tree(7);
// console.log('tree ', tree);

var a = [1,[3,[4,5]]];

function flattenArray(arr = []) {
  var flat = [];
  for (let i=0;i<arr.length;i++) {
    if (Object.prototype.toString.call(arr[i]) === '[object Array]') {
      flat.push(...flattenArray(arr[i]));
    } else {
      flat.push(arr[i])
    }
  }
  return flat;
}

console.log(flattenArray(a));

// Doubly link list

class Node{
  constructor(val){
      this.val = val
      this.next = null;      
      this.prev = null;      
  }
}

class DoublyLinkedList{
  constructor(val){
      this.head = null
      this.tail = null
      this.length = 0
  }
  push(val){
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }
    let current = this.head;
    while(current.next) {
      current = current.next;
    }
    current.next = newNode;
    newNode.prev = current;
    this.tail = current.next;
    this.length++;
    return this;
  }
  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }
    let current = this.head;
    this.head = newNode;
    newNode.next = current;
    current.prev = newNode;
    this.length++;
    return this;
  }
}

var dl = new DoublyLinkList();
dl.push(5);
dl.length;


class MaxBinaryHeap {
  constructor(){
    this.values = []
  }
  insert(val) {
    this.values.push(val);
    this.bubbleUp()
  }
  bubbleUp() {
    let index = this.values.length - 1;
    let element = this.values[index];
    while(index > 0){
      let parentIdx = Math.floor((index-1)/2);
      let parent = this.values[parentIdx];
      if (element <= parent) break;
      this.values[parentIdx] = element;
      this.values[index] = parent;
      index = parentIdx;
    }
  }
  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    this.values[0] = end;
    this.sinkDown();
    return max;
  }
  sinkDown() {
    const element = this.values[0];
    let index = 0;
    while(index < this.values.length) {
      let leftChildIdx = 2*index + 1;
      let rightChildIdx = 2*index + 2;
      let leftChild,rightChild;
      let swap;
      if (leftChildIdx < this.values.length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < this.values.length) {
        rightChild = this.values[rightChildIdx];
        if ((!swap && rightChild > element) || (swap && rightChild > leftChild)) {
          swap = rightChildIdx;
        }
      }
      if (!swap) break;
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
  }
}

// Graph  -> Adjacency list

class Graph {
  constructor(){
    this.adjList = {}
  }
  addVertex(vertex){
    if(!this.adjList[vertex]) this.adjList[vertex] = [];
  }
  addEdge(v1,v2) {
    this.adjList[v1].push(v2);
    this.adjList[v2].push(v1);
  }
  removeEdge(v1,v2) {
    this.adjList[v1] = this.adjList[v1].filter((item) => item !== v2);
    this.adjList[v2] = this.adjList[v2].filter((item) => item !== v1); 
  }
  removeVertex(vertex) {
    while(this.adjList[vertex].length > 0) {
      const elem = this.adjList[vertex].pop();
      this.removeEdge(vertex, elem);
    }
    delete this.adjList[vertex];
  }
  depthFirst(vertex) {
    let result = [];
    let visited = {};
    function dfs(start) {
      if (!start) return ;
      visited[start] = true;
      result.push(start);
      console.log('this ', result);
      this.adjList[start].forEach(neighbour => {
        if (!visited[neighbour]) {
          dfs.call(this,neighbour)
        }
      })
    }
    dfs.call(this, vertex);
    return result;
  }
  breadthFirst(start){
    let result = [];
    let visited = {};
    let queue = [start];
    visited[start] = true;
    while(queue.length) {
      const elem = queue.pop();
      result.push(elem);
      this.adjList[elem].forEach(neighbour => {
        if(!visited[neighbour]){
          visited[neighbour] = true;
          queue.push(neighbour);
        }
      })
    }
    return result;
  }
}

class PriorityQueue {
  constructor(){
    this.queue = [];
  }
  enqueue(val, priority) {
    this.queue.push({val, priority});
    this.sort();
  }
  dequeue() {
    return this.queue.shift();
  }
  sort() {
    this.queue.sort((a,b) => a.priority - b.priority);
  }
}

class WeightedGraph {
  constructor() {
    this.adjList = {}
  }
  addVertex(vertex){
    if(!this.adjList[vertex]) this.adjList[vertex] = [];
  }
  addEdge(v1,v2, weight) {
    this.adjList[v1].push({node: v2, weight});
    this.adjList[v2].push({node: v1, weight});
  }
  dijkstras(start,finish) {
    let distance = {}
    let previous = {}
    // to select minimum in distances
    let queue = new PriorityQueue();
    let smallest;
    let path = [];
    for(let key in this.adjList){
      // put in distances and set each distance infinity initally and also put the distance in queue
      if(key === start) {
        distance[key] = 0;
        queue.enqueue(key, 0);
      } else {
        distance[key] = Infinity;
        queue.enqueue(key, Infinity);
      }
      previous[key] = null;
    }
    while(queue.queue.length) {
      smallest = queue.dequeue().val;
      if (smallest === finish) {
        console.log('distance', distance);
        console.log('previous', previous);
        while(previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        // build the path to be returned
        break;
      }
      if (smallest || distance[smallest] !== Infinity) {
        for (let i=0;i<this.adjList[smallest].length;i++) {
          let nextNode = this.adjList[smallest][i];
          // get the distance of nextNode from smallest
          let candidate = distance[smallest] + nextNode.weight;
          let nextNeighbour = nextNode.node;
          if (candidate < distance[nextNeighbour]) {
            // set the distance of nextnode
            distance[nextNeighbour] = candidate;
            // update how we got to nextNode;
            previous[nextNeighbour] = smallest;
            queue.enqueue(nextNeighbour, candidate)
          }
        }
      }
    }
  }
}


  //   10
  //  9   8
  // 4 7 6  5

  // [5,9,8,4]

  class Heap {
    constructor(arr) {
      this.values = [];
      // this.shuffle();
    }
    insert(val){
      this.values.push(val);
      this.bubbleUp();
    }
    bubbleUp(){
      let index = this.values.length-1;
      while(index > 0){
        let parentIndex = Math.floor((index-1)/2);
        let parent = this.values[parentIndex];
        let elem = this.values[index];
       if(elem <= parent) break;
       this.values[parentIndex] = elem;
       this.values[index] = parent;
       index = parentIndex;
      }
    }
    extractMax(){
      let max = this.values[0];
      let lastElem = this.values.pop();
      this.values[0] = lastElem;
      this.sinkDown()
    }
    sinkDown(){
      let index = 0;
      while(index < this.values.length){
        let leftChildIdx = 2*index + 1;
        let rightChildIdx = 2*index + 2;
        let leftChild,rightChild;
        let current = this.values[index];
        let swap;
        if(leftChildIdx < this.values.length){
          // check with leftChildIdx
          leftChild = this.values[leftChildIdx];
          if(current < leftChild){
            swap = leftChildIdx;
          }
        }
        if(rightChildIdx < this.values.length){
          let rightChild = this.values[rightChildIdx];
          if((!swap && rightChild > current) && (swap && rightChild > leftChild)){
            swap = rightChildIdx;
          }
        }
        if(!swap) break;
        this.values[index] = this.values[swap];
        this.values[swap] = current;
        index = swap;
      }
    }
  }