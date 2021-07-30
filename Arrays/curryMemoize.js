// curry function 
function curry(func) {

  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  };

}

function sum(a, b, c, d) {
  console.log(this)
  return a + b + c + d;
}

let curriedSum = curry(sum);
console.log('sum', curriedSum(1)(2)(3))


function add(...args) {
  let sum1 = args.reduce((a, b) => a + b);
  return function (...args2) {
    if (args2) {
      let sum2 = args2.reduce((a, b) => a + b);
      if (sum2) {
        return add(sum1 + sum2)
      }
    }
    return sum1
  }
}

function add(a) {
  return function (b) {
    if (b) {
      return add(a + b)
    }
    return a
  }
}

sum(1)(2)(3)(4)()

function currySum(args1) {
  return function (args2) {
    if (args2) {
      return currySum(args1 + args2);
    }
    return
  }
}

// memoize a function 

function memoize(func) {
  var cache = {};
  return function (...args) {
    let argsId = args.toString();
    if (cache[argsId]) {
      console.log('value from cache is served', cache[argsId]);
      return cache[argsId]
    }
    let value = func(...args);
    cache[argsId] = value;
    return value;
  }
}

factorial = memoize(factorial);
factorial(5);
factorial(6);

var arr = [1, 2, 3, 4];

arr.reduce((a, b, cum));


function delay(time) {
  return new Promise((res, rej) => {
    setTimeout(res, time);
  })
}

delay(100).then(() => {
  console.log('after  100ms');
  return delay(200)
}).then(() => {
  console.log('after 200ms');
  return delay(300)
}).then(() => {
  console.log('after 300ms');
})

function throttle(func, delay) {
  let timer = 0;
  return function (args) {
    if (timer) {
      return
    } else {
      timer = setTimeout(() => {
        clearTimeout(timer);
        func(args);
      }
        , delay)

    }
  }
}


// currie fun

add(1)(2)();

function add(a) {
  return function (b) {
    if (!b) {
      return a
    } else {
      return add(a + b)
    }
  }
}


function sum(a, b, c) {
  return a + b + c;
}




function processData(input) {
  const floorNo = parseInt(input, 10);
  let k = 0;
  //Enter your code here
  for (let i = 1; i <= floorNo; i++) {
    k++
    while (k.toString().includes('4') || k.toString().includes('13')) {
      k++;
      console.log('inside loop ', k)
    }
  }
  console.log(k);
}

function processData(input) {
  //Enter your code here
  const route = JSON.parse(input);
  let i;
  for (i = 0; i < route.p1.path.length; i++) {
    // move p1 and check if equal coords
    move(route.p1, route.p1.path[i]);
    if (checkIfTheyMeet(route.p1, route.p2)) {
      break;
    }
    move(route.p2, route.p2.path[i]);
    if (checkIfTheyMeet(route.p1, route.p2)) {
      break;
    }
  }
  console.log(`${route.p1.start[0]},${route.p1.start[1]} ${i + 1}`);

}

function move(person, value) {
  switch (value) {
    case 'L':
      person.start[0] -= 1;
      break;
    case 'R':
      person.start[0] += 1;
      break;
    case 'U':
      person.start[1] += 1;
      break;
    case 'D':
      person.start[1] -= 1;
      break;
  }
}

function checkIfTheyMeet(p1, p2) {
  if (p1.start[0] === p2.start[0] && p1.start[1] === p2.start[1]) return true;
  return false;
}



function tuple(str) {
  let result = [];
  let regEx = /\d\,\ \d,\ \d/g;
  const resultArr = str.match(regEx);
  resultArr.forEach((item) => {
    result.push(item.split(',')
    )
  })
  return result;
}

Array.prototype.multiply = function(index) {
  if (this.length === 0 || !this) throw new Error('not an array');
  let product =1;
  this.forEach(item => {
    product *= item[index - 1];
  })
  return product;
}

var maxSubArray = function(nums) {
  let maxEndingHere = -Infinity;
  let result;
  let maxSoFar = -Infinity;
  let start,end;
  for (let i=0;i<nums.length;i++){
      if (maxEndingHere+nums[i] < nums[i]) {
          start = i;
          maxEndingHere = nums[i];
      } else {
          maxEndingHere = maxEndingHere+nums[i]
      }
      if (maxSoFar < maxEndingHere){
       maxSoFar = maxEndingHere;
          end = i;
      }
  }
  return maxSoFar + ' '+ start + ' ' + end
};

Function.prototype.toString = (function () {
  var toStr = Function.prototype.toString;
  return function(s) {
    var str = toStr.call(this);
    return 'start:'+str+':end'
  }
})()


String.prototype.myRepeat = function(n) {
  let result = '';
  let firtsHalf = '';
  let str = this.toString();
  function repeat(n) {
    if (n===1) return str
    let remStr = '';
    let mid = Math.floor(n/2);
    if (mid % 2 !== 0) {
      remStr = str;
    }
    firtsHalf = firtsHalf + repeat(mid);
    return firtsHalf+ remStr
  }
  result = result + repeat(n);
  return result;
}

3  1 2