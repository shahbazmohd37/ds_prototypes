// write own implementation of reduce/filter/map prototype

var arr = [1, 3, 2, 5];

// console.log('arr last value ', arr.reduce((a,b,i,arr) => {
//   console.log('accum ',a, ' next value ', b,' index ', i, ' arr ', arr);
//   return a + b;
// }, 3))

// reduce implementation

Array.prototype.reduce = function(callback, acc) {
    const length = this.length;
    let i = 0;
    if (typeof acc === 'undefined') {
        acc = this[0];
        i = 1;
    }
    for (j = i; j < length; j++) {
        acc = callback(acc, this[j], j, this);
    }
    return acc;
}


// array map function implementation 

Array.prototype.map = function(callback) {
    const length = this.length;
    var returnedArray = []
    for (let i = 0; i < length; i++) {

        returnedArray.push(callback(this[i], i, this));
    }
    return returnedArray;
}

// array filter implementation

Array.prototype.filter = function(callback) {
    const filterArray = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            filterArray.push(this[i]);
        }
    }
    return filterArray;
}

const module = {
    x: 42,
    getX: function() {
        return this.x;
    }
};

var unboundX = module.getX.bind(module, 2)


// polyfill of bind 
// Function.prototype.bind = function(context, ...args){
//   var func = this;
//   return function(...args2) {
//     return func.apply(context, [...args, ...args2])
//   }
// }

// forEach loop polyfill

Array.prototype.forEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
    return undefined;
}

// polyfill for promise

function PromisePolyfill(executor) {
    let onResolve, onReject;
    let fulfilled = false,
        rejected = false,
        called = false;
    let value;

    function resolve(v) {
        fulfilled = true;
        value = v;
        if (typeof onResolve === 'function') {
            onResolve(value);
            called = true;
        }
    }

    function reject(reason) {
        rejected = true;
        value = reason;
        if (typeof onReject === 'function') {
            onResolve(value);
            called = true;
        }
    }

    this.then = function(resolveCallback, rejectCallback) {
        if (fulfilled && !called) {
            onResolve = resolveCallback;
            called = true;
            onResolve(value);
        }
        if (rejected && !called) {
            onReject = rejectCallback;
            called = true;
            onReject(value);
        }
        return this
    }

    this.catch = function(rejectCallback) {
        if (rejected && !called) {
            onReject = rejectCallback;
            called = true;
            onReject(value);
        }
        return this
    }


    try {
        executor(resolve, reject);
    } catch (err) {
        reject(err)
    }
}

// Methods of promise 

// Promise.resolve

PromisePolyfill.resolve = (res) => {
    return new PromisePolyfill((resolve, reject) => resolve(res))
}

// Promise.reject

PromisePolyfill.resolve = (err) => {
    return new PromisePolyfill((resolve, reject) => reject(err))
}

// Promise.all

PromisePolyfill.all = (promises) => {
    var promiseValue = [];

    function executer(res, rej) {
        promises.forEach((item) => {
            item.then((res) => {
                promiseValue.push(res);
                if (promiseValue.length === promises.length) {
                    return resolve(res);
                }
            }).catch(err => {
                return rej(err);
            })
        });
    }
    return new PromisePolyfill((executer));
}


const myAll = function(promises) {
    return new Promise((res, rej) => {
        let promiseValue = [];
        for (i = 0; i < promises.length; i++) {
            promises[i].then(res => {
                promiseValue.push(res);
                if (promiseValue.length === promises.length) {
                    res(promiseValue);
                }
            }).catch((err) => rej(err));
        }
    })
}



var a = new Promise((res, rej) => {
    setTimeout(() => {
        console.log('Printing 5 in console');
        res(5);
    }, 2000);
})

console.log('Promise is initalised ');
a.then((res) => {
    console.log('res inside promise ', res);
});
console.log('Then method is invoked earlier');



// Polyfill of promises

let p1 = new Promise((res, rej) => {});


function PromisePolyfill(executor) {
    let value;
    let fulfilled;

    function resolve(data) {
        value = data;
        fulfilled = true;
    }

    function reject(data) {
        value = data;
        rejected = true;
    }
    this.then = function(successCallback, errorCallback) {
        if (fulfilled) {
            successCallback(value);
        };
        if (rejected) {
            errorCallback(value);
        }
        return this;
    }
    this.catch = function(errorCallback) {
        if (rejected) {
            errorCallback(value);
        }
        return this;
    }
    executor(resolve, reject);
}

Promise.prototype.raceCustom = function(promises) {
    return new Promise((res, rej) => {
        let promiseValue;
        for (let i = 0; i < promises.length; i++) {
            promises[i].then((response) => {
                if (!promiseValue) {
                    promiseValue = response
                    res(promiseValue);
                }
            }).catch(err => {
                if (!promiseValue) {
                    promiseValue = err;
                    rej(promiseValue)
                }
            })
        }
    })
}
const p1 = new Promise((res) => { setTimeout(function() { res('promise  1 resolved ') }, 1000) });
const p2 = new Promise((res) => { setTimeout(function() { res('promise  1 resolved ') }, 2000) });
const p3 = new Promise((res) => { setTimeout(function() { res('promise  1 resolved ') }, 3000) });

Promise.prototype.raceCustom([p1, p2, p3]).then(res => {
    console.log(res);
})


// bind polyfill

Function.prototype.myBind = function(context, arguments) {
    var func = this;
    return function(args) {
        return func.apply(context, arguments.concat(args))
    }
}

// action
// two callback fn => when resolved => fire the then callbacks in a series;


function CustomPromise(action) {
    action.call(this, this.onResolve, this.onReject);
    this.state = 'STATE';
    this.resolveValue = '';
    this.thenCallbacks = [];
    this.errorCallback = [];
    this.onResolve = function(data) {
        this.resolveValue = data;
        this.thenCallbacks.forEach(callback => {
            callback(this.resolveValue)
        })
    }
    this.onReject = function(data) {
        this.resolveValue = data;
        this.errorCallback.forEach(callback => {
            callback(this.resolveValue);
        })
    }
    this.then = function(callback) {
        this.thenCallbacks.push(callback);
        return this
    }
    this.catch = function(errorCalback) {
        errorCalback && this.errorCalback.push(errorCalback);
        return this
    }
}

promise
    .then(function(response) {
        console.log(response)
    }).then(() => {
        new Promise(res => {
            setTimeout(() => {
                console.log('shahbaz')
            }, 5000);
        })
    })
    .catch(function(error) {
        console.log(error)
    })