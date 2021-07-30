function removeDuplicates(str) {
  var hashMap = new Map();
  for(let i = 0; i<str.length;i++){
    hashMap.set(str[i], 1);
  }
  const newStrArr = [];
  for(let [i,value] of hashMap.entries()) {
    newStrArr.push(i);
  }
  return newStrArr.join('')
}

function removeCharFromFirstString(str1, str2) {
  var str1Arr = Array.from(str1);
  for(let i =0; i<str2.length;i++){
    if(str1Arr.includes(str2[i])) {
      delete str1Arr[str1Arr.indexOf(str2[i])]
    }
  }
  return str1Arr.join('')
}

function areRotationsOf(str1, str2) {
  var temp = str1.concat(str1);
  if (temp.includes(str2)){ return true}
  return false;
}
//permutation of a string

function getPermutation(str) {
  if(str.length < 2) {
    return str
  }
  let permutationArr = [];
  for(let i = 0; i<str.length; i++) {
    let char = str[i];
    const newStr = str.slice(0,i) + str.slice(i+1, str.length)
    console.log('new Str', newStr);
    for (let permutation of getPermutation(newStr)) {
      permutationArr.push(char + permutation);
    }
  }
  return permutationArr;
}

console.log('Output', reverseWords('My name is shahbaz'));

function reverseWords(str) {
  const words = str.split(' ');
  const newStr = words.reverse().join(' ');
  return newStr;
}

// to check of string is anagram : integral -> triangle

function checkAnagram(str1, str2) {
  const sortStr1 = Array.from(str1).sort().join('');
  const sortStr2 = Array.from(str2).sort().join('');
  if (str1.length !== str2.length)  return false;
  if (sortStr1 === sortStr2) return true;
  return false;
}


function myRepeat(count) {
  if (this.length === 0) return '';
  if (isNaN(count)) throw new Error('Count must be a number');
  let s = '' + this;
  function repeat(n) {
    if (n===1) return s;
    let mid = Math.floor(n/2);
    let remStr = '';
    if (mid%2 !== 0) {
      remStr = s;
    }
    let firstHalf = repeat(mid);
    return firstHalf+firstHalf+remStr;
  }
}