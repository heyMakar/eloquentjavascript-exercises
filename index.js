/* eslint-disable no-console */
const triangle = () => {
  let result = '#';
  let i = 0;
  while (i < 7) {
    console.log(result);
    result += '#';
    i += 1;
  }
};

triangle();

const triangleWithLength = () => {
  let result = '#';
  while (result.length <= 7) {
    console.log(result);
    result += '#';
  }
};

triangleWithLength();

const fizzBuzz = (start, end) => {
  while (start <= end) {
    const isFizzBuzz = (start % 3 === 0 && start % 5 === 0);
    const isBuzz = start % 5 === 0;
    const isFizz = start % 3 === 0;
    if (isFizzBuzz) {
      console.log('fizzbuzz');
    } else if (isBuzz) {
      console.log('buzz');
    } else if (isFizz) {
      console.log('fizz');
    } else console.log(start);
    start += 1;
  }
};

fizzBuzz(1, 100);

const gridSize = 8;
let gridResult = '';

for (let x = 0; x < gridSize; x += 1) {
  for (let y = 0; y < gridSize; y += 1) {
    if ((x + y) % 2 === 0) {
      gridResult += ' ';
    } else gridResult += '#';
  }
  gridResult += '\n';
};

console.log(gridResult);

const minimum = (arg1, arg2) => ((arg1 < arg2) ? arg1 : arg2);
console.log(minimum(0, 10));
console.log(minimum(0, -10));

const isEven = (n) => {
  if (n === 0) {
    return true;
  }
  if (n === 1) {
    return false;
  } 
  if (n < 0) {
    return isEven(-n);
  } 
  return isEven(n - 2);
};

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

const countChar = (string, char) => {
  let result = 0;
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === char) {
      result += 1;
    }
  }
  return result;
};

console.log(countChar("kakkerlak", "k"));

const range = (start, end, step = 1) => {
  let arr = [];
  let current = start;
  if (step > 0) {
    while (current <= end) {
      arr.push(current);
      current += step;
    }
  return arr;
  } else {
    while (current >= end) {
      arr.push(current);
      current += step;
    }
  return arr;
  }
};

console.log(range(5, 2, -1));
console.log(range(1, 10));

const sum = (arr) => {
  let result = 0;
  for(let i of arr) {
    result += i;
  }
  return result;
}

console.log(sum(range(1, 10)))

const reverseArray = (arr) => {
  return Array.from(arr).reverse();
};

console.log(reverseArray(range(1, 10)));

const reverseArrayInPlace = (arr) => {
  let emptyArr = [];
  for (let i = arr.length - 1; i >= 0; i -= 1) {
    emptyArr.push(arr[i]);
  }
  return emptyArr;
};

console.log(reverseArrayInPlace(range(1, 10)));

const arrayToList = (arr) => {
  let list = null;
  for (let i = arr.length - 1; i >= 0; i -= 1) {
    list = {value: arr[i], rest: list};
  }
  return list;
};

console.log(arrayToList(range(1, 3)));

const listToArray = (arr) => {
  let array = [];
  for (let i = arr; i; i = i.rest) {
    array.push(i.value);
  }
  return array;
}

console.log(listToArray(arrayToList(range(1, 3))));
