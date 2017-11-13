function stats(arr) {
  var sum = arr.reduce( (a, b) => (a + b));
  var mean = sum / arr.length;
  var min = Math.min.apply(null, arr);
  var max = Math.max.apply(null, arr);

  var difference = arr.map(x => x - mean)
                      .map(x => x * x)
                      .reduce( (a, b) => a + b )  / arr.length

  var std = Math.sqrt(difference);
  return { sum, mean, min, max, std};
}

console.log(stats([1, 2, 3, 4, 5]));
console.log(stats([23]));
console.log(stats([0.35, 0.42, 0.12, 0.27, 0.39, 0.46, 0.25, 0.19]));
