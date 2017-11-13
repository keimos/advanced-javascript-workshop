function freqCount(arr) {
  // TODO: return an object containing the frequency counts of the input array.
  return arr.reduce((prev, curr) => {prev[curr] = prev[curr] ? prev[curr] + 1 : 1;
    return prev;
  }, {});
}

const fruit = ['apple', 'orange', 'apple',
               'banana', 'pear', 'apple',
               'banana', 'orange'];
console.log(freqCount(fruit));  // should print { apple: 3, orange: 2, banana: 2, pear: 1 }
