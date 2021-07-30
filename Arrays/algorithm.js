// anagram -> listen , Frequency 

function isAnagram(s1, s2) {
  if (s1.length !== s2.length) return false;
  let freq1 = {};
  let freq2={};
  for (let i=0;i<s1.length;i++){
    freq1[s1[i]] = ++freq1[s1[i]] || 1;
    freq2[s2[i]] = ++freq2[s2[i]] || 1;
  }
  for (let key in freq1) {
    if (!freq2[key] || freq2[key] !== freq1[key]) {
      return false
    }
  }
  return true;
}

// count unique values -> Multiple pointer approach
// [1,1,2,3,3,4,5,6,7];
function  countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  let count = 0;
  let uniqueValue = arr[0];
  let i =1;
  while(i<arr.length) {
    if (arr[i] !== uniqueValue) {
      uniqueValue = arr[i];
      count++;
    }
    i++;
  }
  return count+1
}

// sliding window pattern => maxSum in subset array
// [1,2,3,4,6,2,1,2,3,2,0,5,4,6,1,2,4,7] in 4

function maxSumInSubset(arr,k) {
  if (arr.length === 0 || arr.length < k) return null
  let max = 0;
  for (let i=0;i<k;i++) {
    max += arr[i];
  }
  let temp = max;
  for (let i=k;i<arr.length;i++){
    temp = temp - arr[i-k] + arr[i];
    if (temp > max) {
      max=temp
    }
  }
  return max;
}

// sorting algorithm 
 // bubble sort

function  swap(arr, i1, i2) {
  let temp = arr[i1];
  a[i1] = a[i2];
  a[i2] = temp;
}

function bubbleSort(arr) {
  for (let i=arr.length-1;i>0;i--){
    for (let j=0;j<=i-1;j++) {
      if (arr[j] > arr[j+1]) {
        swap(arr, j, j+1);
      }
    }
  }
  return arr;
}

// selection sort -> similar to bubble sort as minimum is selected and put at first;

 function selectionSort(arr) {
  for(let i=0;i<arr.length;i++) {
    let lowest = i;
    for(let j=i+1;j<arr.length;j++){
      if (arr[j]<arr[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest){
      console.log('swapping')
      swap(arr, i, lowest);
    }
  }
  return arr;
 }

 // insertion sort -> in this the left array is made sorted by comparing th current value to the previous values in array and inserted at right positon

 function insertionSort(arr) {
   for(let i=1;i<arr.length;i++) {
     let currentVal = arr[i];
     for (var j=i-1;j>=0 && arr[j] > currentVal;j--) {
         arr[j+1] = arr[j];
         console.log(arr)
     }
     arr[j+1] = currentVal;
   }
   return arr;
 }

 // merge sort algorithm , Devide and then merge by comparing

 function merge(arr1, arr2) {
   let i=0;
   let j=0;
   let result = [];
   while(i<arr1.length && j<arr2.length) {
     if (arr1[i]<=arr2[j]){
       result.push(arr1[i]);
       i++
     } else if(arr1[i]>arr2[j]) {
       result.push(arr2[j]);
       j++;
     }
   }
  while(i<arr1.length){
    result.push(arr1[i]);
    i++
  }
  while(j<arr2.length){
    result.push(arr2[j]);
    j++
  }
 }

 function  mergeSort(arr) {
   if (arr.length <= 1) return arr;
   let middle = Math.floor(arr.length/2);
   const left = mergeSort(arr.slice(0, middle))
   const right = mergeSort(arr.slice(middle));
   console.log(left, right);
   const mergeArr = merge(left, right);
   return mergeArr;
 }

 // quick sort algorithm
[1,3,2,4,6,5]
 function  getPivot(arr, start = 0, end = arr.length-1) {
   let pivotVal = arr[start];
   let swapIndex = start;
   for (let i=1;i<arr.length;i++) {
     if(pivotVal > arr[i]) {
       swapIndex++;
       swap(arr, swapIndex, i);
     }
   }
   swap(arr, swapIndex, start);
   console.log(arr);
   return swapIndex
 }

 function quickSort(arr, left = 0, right = arr.length-1) {
   if (left < right) {
    let pivot = getPivot(arr, left, right);
    quickSort(arr, left, pivot-1);
    quickSort(arr, pivot+1, right);
  }
  return arr;
 }

 // buble sort
 // [5,4,3,2,1];
 // [4,3,2,1,5]

 function bubbleSort(arr) {
   for (let i=0;i<arr.length;i++) {
     for (let j=0;j<arr.length-1;j++){
       if (arr[j] > arr[j+1]) {
         let temp = arr[j+1];
         arr[j+1] = arr[j];
         arr[j] = temp;
       }
     }
   }
 }

 function swap(arr, ind1, ind2){
  let temp = arr[ind2];
  arr[ind2] = arr[ind1];
  arr[ind1] = temp;
}



function bubbleSortComp(arr, comparator){
  // add whatever parameters you deem necessary - good luck!
        let callback = typeof comparator !== 'function' ? (a,b) => a-b : comparator;
    for (let i=0;i<arr.length;i++){
      for (let j=0;j<arr.length-1-i;j++){
        // use comparator function
        if (callback(arr[j], arr[j+1]) > 0){
         swap(arr, j , j+1);
       } 
      }
  }
  return arr
  }

  // selection sort
  // [{age: 5}, {age: 4}, {age: 2}, {age:3}]
  // (a,b) => a-b

function selectionSortComp(arr, comparator) {
  let callback = typeof comparator !== 'function' ? (a,b) => a-b : comparator;
  for (let i=0;i<arr.length;i++){
    let min = arr[i];
    let minIndex;
    for (let j=i+1;j<arr.length;j++){
      if (callback(arr[j], min) < 0) {
        min = arr[j];
        minIndex = j;
      }
    }
    if (minIndex) swap(arr, i, minIndex)
  }
  return arr
}

// insertions sort
// [5,4,3,2,1] (a-b)

function  insertionSort(arr,comparator) {
  let callback = typeof comparator !== 'function' ? (a,b) => a-b : comparator;
  for (let i=1;i<arr.length;i++) {
    let currentVal = arr[i];
    let actualPos = i;
    for (let j=i-1;j>=0;j--){
      if (callback(arr[j], currentVal)>0) {
        arr[j+1] = arr[j];
        actualPos = j;
      } else {
        break;
      }
    }
    arr[actualPos] = currentVal;
  }
  return arr
}

function merge(arr1,arr2, comparator){
  // add whatever parameters you deem necessary - good luck!
  let callback = typeof comparator !== 'function' ? (a,b) => a-b : comparator;
  let i=0;
  let j=0;
  let result = [];
  while(i<arr1.length && j<arr2.length) {
      if (callback(arr1[i], arr2[j]) >= 0) {
          result.push(arr2[j]);
          j++;
      } else {
          result.push(arr1[i]);
          i++;
      }
  }
  if (i<arr1.length) {
      while(i<arr1.length) {
          result.push(arr1[i]);
          i++
      }
  }
    if (j<arr2.length) {
      while(j<arr2.length) {
          result.push(arr2[j]);
          j++
      }
  }
  return result;
}

function mergeSort(arr, comparator){
  // add whatever parameters you deem necessary - good luck!
  if (arr.length <= 1) return arr;
  let mid = Math.floor((arr.length)/2);
  let left = mergeSort(arr.slice(0, mid), comparator);
  let right = mergeSort(arr.slice(mid), comparator);
  return merge(left, right, comparator);
}

// quick sort 5 , 1

              10
          4        16
        2        14      18

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value){
      const node = new Node(value);
      if (!this.root) {
          this.root = node;
      } else {
          let current = this.root;
          while(current) {
              if (value > current.value) {
                if (current.right) {
                  current = current.right;
                } else {
                  current.right = node;
                }
              } else if (value < current.value) {
                if (current.left) {
                  current = current.left;
                } else {
                  current.left = node;
                }
              }
          }
      }
  }
  find(value) {
    function search(bst, value) {
      if (bst === null) return undefined;
      if (bst.value === value) return bst;
      if (value > bst.value) {
        return search.call(this, bst.right, value);
      }
      if (value < bst.value) {
        return search.call(this, bst.left, value);
      }
    }
    return search.call(this, this.root, value);
  }
}


// sorting algorithms

// bubble sort
// bubble max to the last
// [4,3,2,1]
// []
function swap(arr, m, n) {
  let temp = arr[m];
  arrp[m] = arr[n]
  arr[n] = temp;
}
function bubleSorting(arr) {
  for (let i=0;i<arr.length;i++){
    for (let j=0;j<arr.length-i-1;j++){
      if (arr[j] > arr[j+1]){
        swap(arr, j, j+1);
      }
    }
  }
  return arr
}
// insertion sort
// start from 1 and compare all the value to left and swap 
// [3,4,2,1]
function insertionSorting(arr){
  for (let i=1;i<arr.length;i++){
    let current = arr[i];
    for(var j=i-1;j>=0 && arr[j] > current;j--){
        arr[j+1] = arr[j];
    }
    arr[j+1] = current;

  }
  return arr
}


// selection sort
// make the first one maximum and 
// and iterte to find the max

function selectionSorting(arr){
  for (let i=0;i<arr.length;i++){
    max = arr[i];
    let j;
    for (j=i+1;j<arr.length;j++){
      if (arr[j] > max) {
        max = arr[j];
        swap(arr, i,j);
      }
    }
  }
}

// merge sort
// take mid and recursively break into half and then sort left and right; and then merge;
// [8,7,6,5,4,3,2,1]
function merge(left,right){
  let i = 0;
  let j=0;
  const arr = [];
  while(i<left.length && j<right.length){
    if (left[i]>= right[j]){
      arr.push(right[j]);
      j++;
    } else {
      arr.push(left[i]);
      i++;
    }
  }
  while(i<left.length){
    arr.push(left[i]);
    i++
  }
  while(j<right.length){
    arr.push(right[j]);
    j++
  }
  return arr
}

function mergeSorting(arr) {
  if (arr.length <= 1) arr;
  let mid = Math.floor(arr.length/2);
  let left = mergeSorting(arr.slice(0,mid));
  let right = mergeSorting(arr.slice(mid));
  return merge(left, right)
}
// quick sort
// get the pivot index;
// ensure the left of pivot and right of pivot are sorted;
// recursively do this for complete array

function getPivotEl(arr, start, end){
  const pivotVal = arr[start];
  let swapIndex = start;
  for (let i=1;i<arr.length;i++){
    if(pivotVal>arr[i]){
      swapIndex++;
      swap(arr, i, swapIndex);
    }
  }
  swap(arr, swapIndex, start);
  return swapIndex
}

function quick(arr, start=0, end=arr.length) {
  if(start<end) {
    const pivot = getPivotEl(arr, start, end);
    quick(arr, start, pivot);
    quick(arr, pivot, end);
  }
}

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
return maxSoFar


function swap(nums, i, j){
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}
// sorting
// SELECTION sort
// minimum selected and put at first
function selectionSortAlgo(nums){
  for (let i=0;i<nums.length;i++){
    let min = nums[i];
    let idx = i;
    for (let j=i+1;j<nums.length;j++){
      if (nums[j] < min){
        min = nums[j];
        idx=j;
      }
    }
    swap(nums, i, idx);
  }
}

// Insertioin Sort
// elements at left of the pointer is always sorted 
function insertionSortAlgo(nums){
  for (let i=1;i<nums.length;i++){
    let p = i-1;
    if(nums[p]>nums[i]){
      let temp = nums[i];
      let k = p;
      while(nums[k] > temp && k >=0){
        nums[k+1] = nums[k];
        k--;
      }
      nums[k+1] = temp;
    }
  }
  return nums
}

// buble sort
// max bubbled to last
// two for loop 
// in inner loop compare the two adjacent values and swap if prev is greater than current;
// [4,5,6,3,2,1]
// [4,5,3,2,1,6]
function bubleSortAlgo(nums){
for(let i=0;i<nums.length;i++){
  for (let j=0;j<nums.length-1;j++){
    if(nums[j] > nums[j+1]){
      swap(nums, j, j+1);
    }
  }
}
return nums;
}

// merge sort
// devide the arr into two halves and then merge

function mergeSortAlgo(nums){
  if (nums.length <=1) return nums;
   const mid = Math.floor((nums.length/2));
   const left= mergeSortAlgo(nums.slice(0, mid));
   const right = mergeSortAlgo(nums.slice(mid));
   return mergeArray(left, right);
}

function mergeArray(left, right){
  let i=0;
  let j=0;
  let res = [];
  while(i<left.length && j<right.length){
    if(left[i]>right[j]){
      res.push(right[j]);
      j++;
    } else {
      res.push(left[i]);
      i++;
    }
  }
  while(i<left.length){
    res.push(left[i]);
    i++
  }
  while(j<right.length){
    res.push(left[j]);
    j++
  }
  return res;
}

// quick sort
get a pivot index an then 