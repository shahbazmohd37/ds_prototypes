// get subset of an array;

var subsetArr = (arr) => {
        const subset = arr.reduce((acc, item) => {
            console.log('item ', item);
            return acc.concat(acc.map((eachSubset) => { console.log('eachsubset', eachSubset, item); return [...eachSubset, item] }))
        }, [
            []
        ])
        return subset;
    }
    // console.log('subset value is ', subsetArr([1,2,3,4]));

function rotateLeft(d, arr) {
    // Write your code here
    const temp = [];
    for (let i = 0; i < d; i++) {
        temp.push(arr[i]);
    }
    for (let i = 0; i < arr.length - d; i++) {
        arr[i] = arr[d + i];
    }
    console.log(arr);
    let size = 0;
    for (let j = arr.length - d; j < arr.length; j++) {
        arr[j] = temp[size];
        size++
    }
    return arr

}
console.log(rotateLeft([1, 2, 3, 4, 5], 2))

// key is present in array [3, 5, 2, 4, 9, 3, 1, 7, 3, 11, 12, 3]

function isKeyInArray(arr, x, k) {
    let flag = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === x) { flag = 1; }
        console.log('fasdf', i + 1 % k)
        if (((i + 1) % k) === 0 && i !== arr.length - 1) {
            if (!flag) {
                return false;
            } else {
                console.log('i ', i)
                flag = 0
            }
        }
    }
    if (flag) return true;
    return false;
}

// Find common elements in three sorted arrays
// ar1[] = {1, 5, 10, 20, 40, 80} 
// ar2[] = {6, 7, 20, 80, 100} 
// ar3[] = {3, 4, 15, 20, 30, 70, 80, 120} 

function commonElements(ar1, ar2, ar3) {
    const temp = [];
    let index = 0;
    for (let i = 0; i < ar1.length; i++) {
        if (ar1[i] === ar2[i]) {
            temp.push(ar1[i]);
        }
    }
}


// union and intersection 
// [1,3,5,7] [2,3,4,5,6,7];

function getUnion(arr1, arr2) {
    let i = 0;
    let j = 0;
    const union = [];
    const inter = [];
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] > arr2[j]) {
            union.push(arr2[j]);
            j++;
        } else if (arr1[i] < arr2[j]) {
            union.push(arr1[i]);
            i++
        } else {
            union.push(arr1[i]);
            inter.push(arr1[i]);
            i++;
            j++;
        }
    }
    while (i < arr1.length) {
        union.push(arr1[i]);
        i++
    }
    while (j < arr2.length) {
        union.push(arr2[j]);
        j++
    }
    console.log(union, inter);
}

// find pair of no with sum
// [1,5,7,-1,5]


function getPair(arr, sum) {
    let freq = {};
    for (let i = 0; i < arr.length; i++) {
        if (freq[arr[i]]) {
            freq[arr[i]]++
        } else {
            freq[arr[i]] = 1
        }
    }
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (freq[sum - arr[i]]) {
            count = count + freq[sum - arr[i]];
            if (sum - arr[i] === arr[i]) {
                count--
            }
        }
    }
    return count / 2;
}

// [1, 2, 3, -4, -1, 4]
// [-4,1,-1,2,3,4]
// [-5, -2, 5, 2, 4, 7, 1, 8, 0, -8]
// [-5,5,-2]

function arrange(arr) {
    let j = 0;
    for (let i = 1; i < arr.length;) {
        if (arr[j] > 0) {
            if (arr[i] < 0) {
                i++;
            } else {
                let current = arr[i];
                for (let k = i; k > j; k--) {
                    arr[k] = arr[k - 1];
                }
                arr[j] = current;
                j = j + 2;
                i++
            }
        } else {
            if (arr[i] < 0) {
                i++;
            } else {
                let current = arr[i];
                for (let k = i; k < j; k--) {
                    arr[k] = arr[k - 1];
                }
                j++
                arr[j] = current;
                j = j + 2;
                i++;
            }
        }
    }
    console.log('array', arr);
}


// mas sum contiguos subarray
// [-2,-3,4,-1,-2,1,5,-3]
// i=0; maxSoFar < maxEndinghere maxSoFar set
// maxEndinghere = sum of a[i]
// if maxEndingHere < 0 maxend = 0;


function maxSumArr(arr) {
    let maxEndingHere = 0;
    let maxSoFar = 0;
    for (let i = 0; i < arr.length; i++) {
        maxEndingHere = maxEndingHere + arr[i];
        if (maxEndingHere > maxSoFar) {
            maxSoFar = maxEndingHere;
        }
        if (maxEndingHere < 0) {
            maxEndingHere = 0;
        }
    }
    return maxSoFar
}


// 6, -3,4, -10, 0, 2 , 1
// maxEndingHere = maxEndingHere*a[i]
-
18 * -3
    // if (a[i] === 0){break}
    // if ( minEndinHere * a[i] > maxendingHere) {}
    // minendingHere = minEndinHere * a[i] 
max 6
min 1

max = 1
min - 18;

max = 4;
min - 72;


4
720 = max;
min = -40

    -
    2, -3, 4, 5




function maxProdArr(arr) {
    let maxEndingHere = 1;
    let minendingHere = 1;
    let maxSoFar = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            maxEndingHere = 1;
            minendingHere = 1;
        } else {
            temp = maxEndingHere;
            maxEndingHere = Math.max(arr[i], maxEndingHere * arr[i], minendingHere * arr[i]);
            minendingHere = Math.min(arr[i], temp * arr[i], minendingHere * arr[i]);
        }
        if (maxSoFar < maxEndingHere) {
            maxSoFar = maxEndingHere;
        }
    }
    return maxSoFar;
}

// sum of three

function sumArr(arr, target) {
    let result = [];
    let freq = {};
    for (let i = 0; i < arr.length; i++) {
        freq[arr[i]] = 1
    }
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            if (freq[target - arr[i] - arr[j]]) {
                result.push(arr[i], arr[j], target - arr[i] - arr[j])
                return result;
            }
        }
    }
    return result
}

function spiral(arr) {
    let row = arr.length;
    let col = arr[0].length;
    if (row === 0) return null;

    let result = []
    let left = 0;
    let right = col - 1;
    let top = 0;
    let bottom = row - 1;
    let direction = 0;
    // direction 
    // 0 -> left->right
    // 1 -> top -> bottom
    // 2 -> right-left;
    // 3 -> bottom-top

    while (left <= right && top <= bottom) {
        if (direction === 0) {
            for (let i = left; i <= right; i++) {
                result.push(arr[top][i]);
            }
            top++;
        }
        if (direction === 1) {
            for (let i = top; i <= bottom; i++) {
                result.push(arr[i][right]);
            }
            right--;
        }
        if (direction === 2) {
            for (let i = right; i >= left; i--) {
                result.push(arr[bottom][i]);
            }
            bottom--;
        }
        if (direction === 3) {
            for (let i = bottom; i >= top; i--) {
                result.push(arr[i][left]);
            }
            left++;
        }
        direction = (direction + 1) % 4;
    }
    return result
}

// (1, 2, 3) , (4, 5, 6) ,  (7, 8, 9)
// regex = /\d\, \d, \d/g
// ["1,2,3", "4,5,6"]
// iterate and convert each elem and put in arr


function tuple(s) {
    const regex = /\d\, \d\, \d/g;
    const arr = s.match(regex);
    console.log(arr);
    const result = [];
    arr.forEach(item => {
        const newArr = item.split(',').map(Number);
        result.push(newArr)
    })
    return result;
}

Array.prototype.myMultiply = function(index) {
    var arr = this;
    if (isNaN(index)) throw new Error('required a number');
    if (arr.length === 0) return 0; // or can throw error
    if (index > arr[0].length) {
        return 0
    }
    let prod = 1;
    arr.forEach((item) => {
        prod *= item[index - 1]
    });
    return prod;
}

// change existing funtion to 

Function.prototype.toString = (function() {
    var oldToStr = Function.prototype.toString;
    return function() {
        return `start: ${this.oldToStr()} :end`
    }
})()

// asas asas

function repeat(n) {
    if (this === null) throw new Error('can convert to string');
    if (this.length === 0) return this;
    if (isNaN(n)) throw new Error('Number is required');
    n = +n

    function repeatHelper(n) {
        if (n === 1) return this;
        let mid = Math.floor(n / 2);
        let rem = '';
        if (n % 2 !== 0) {
            rem = this;
        }
        let firtsHalf = repeatHelper.call(this, mid);
        return firtsHalf + firtsHalf + rem
    }
    result = repeatHelper.call(this.toString(), n);
    return result;
}