function arrayHasElementsWithSumX(arr = [], sum) {
  let isPresent = false;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let total = arr[i] + arr[j];
      if (sum === total) {
        isPresent = true;
        return `${arr[i]}, ${arr[j]}`
      }
    }
  }
  if (!isPresent) {
    return false;
  }
  return false;
}

// var arr = [10, 3, 5, 6, 2];
// console.log('returned value ',getProductArray(arr));

function majorityElement(arr = []) {
  var sortedArr = arr.sort(function (a, b) { return a - b });
  let count = 1;
  let maxCount = arr.length / 2;
  console.log(sortedArr);
  for (let i = 1; i < sortedArr.length; i++) {
    if (sortedArr[i - 1] === sortedArr[i]) {
      count++;
      if (count >= maxCount) {
        return `Maximum count ${sortedArr[i]}`
      }
    } else {
      count = 1
    }
  }
  return 'No element present with maximum count'
}


function oddElementInArr(arr = []) {
  var map = {};
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]]) { map[arr[i]]++ } else { map[arr[i]] = 1 }
  };
  console.log('map', map);
  for (let key in map) {
    if (map[key] % 2 === 1) {
      return `odd number is ${key}`
    }
  }
  return 'no odd number present'
}

function leftRotateByOne(arr = []) {
  var temp = arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr[arr.length - 1] = temp;
}

function reverseArrayByDUnit(arr, d) {
  // var tempArr = [];
  for (let i = 0; i < d; i++) {
    leftRotateByOne(arr);
  }
  return arr;
}

// all elements right to it are small and last one is itself a leader
function getLeaders(arr = []) {
  const leaders = [];
  let isLeader = true;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] <= arr[j]) {
        isLeader = false;
        break;
      }
      if (j === arr.length - 1) {
        leaders.push(arr[i])
      }
    }
  }
  leaders.push(arr[arr.length - 1]);
  return leaders;
}
// or
function leaderFromRight(arr) {
  const size = arr.length;
  const leaders = [];
  let max = arr[size - 1];
  for (let i = size - 1; i >= 0; i--) {
    if (arr[i] >= max) {
      max = arr[i];
      leaders.push(arr[i])
    }
  }
  return leaders;
}

function segregate0(arr = []) {
  var left = 0;
  var right = arr.length - 1;
  while (left < right) {
    if (arr[left] === 0) {
      left++;
    } else if (arr[right] === 1) {
      right--;
    } else {
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
    }
  }
  return arr;
}

// get product of array of all elements except i
function getProductArray(arr = []) {
  var n = arr.length;
  var left = new Array(n);
  left[0] = 1;
  var right = new Array(n);
  right[n - 1] = 1;
  const product = [];
  if (n === 1) { return 0 }
  let productLeft = 1;
  let productRight = 1;
  for (let i = 1; i < n; i++) {
    left[i] = arr[i - 1] * left[i - 1];
  }
  for (let i = n - 2; i >= 0; i--) {
    right[i] = arr[i + 1] * right[i + 1];

  }
  for (let i = 0; i < n; i++) {
    product.push(left[i] * right[i]);
  }
  return product;
}

function findSumOfSubArraygetMaxJMinusI(arr) {
  var n = arr.length;
  console.log(n)
  let max = -1;
  for (let i = (n - 1); i >= 0; i--) {
    console.log('max', arr[i]);
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j]) {
        if (i - j > max) {
          max = i - j
        }
      }
    }
  }
  return max;
}

console.log('returned value', findSumOfSubArray([1, 3, 10, 5],7))

function findSumOfSubArray(arr, sum) {
  var n = arr.length;
  var subArr = [];
  let subArrSum = 0;
  for (let i = 0; i < arr.length; i++) {
    subArr[i] = arr[i];
    subArrSum = subArrSum + subArr[i];
    while (subArrSum > sum) {
      subArrSum = subArrSum - subArr[0];
      subArr.shift();
    }
    if (subArrSum == sum) {
      return subArr
    }
  }
  return []
}

function findContentChildren(greed, cookies) {
  let solution = 0;
  let greedIndex = 0;
  greed.sort((a,b) => a-b);
  cookies.sort((a,b) => a-b);
  for (let i = 0;i<greed.length;i++) {
      if(cookies[i] >= greed[greedIndex]) {
        solution++;
        greedIndex++;
      }
  }
}


// fibonacci series

function getFibonacci(n) {
  let prev = 0;
  let current = 1;
  var fiboNum = [0,1];
  for (let i=3;i<=n;i++) {
    var sum = prev + current;
    fiboNum.push(sum);
    let temp = current;
    current = sum;
    prev = temp;
  }
  console.log(fiboNum.toString());
}

// pallindrome

function checkPallindrome(str) {
  str = str.split(' ').join('');
  let newStr = Array.from(str);
  if(str === newStr.reverse().join('')) return true;
  return false;
}

function fibonacciRecursion(n) {
  if (n === 2) 
  return 1;
  return fibonacciRecursion(n-1) + fibonacciRecursion(n-2)
}

function printList(obj) {
  console.log(obj.value);
  if (!obj.next) {
    return 
  }
  return printList(obj.next)
}