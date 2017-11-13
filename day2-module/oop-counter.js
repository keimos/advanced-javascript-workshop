class Counter {
  // TODO: implement the counter
}

// test it out
const counter = new Counter(10);
console.log(counter.value);       // 10
counter.inc();
console.log(counter.value);       // 11
counter.inc(100);
console.log(counter.value);       // 111
counter.dec();
console.log(counter.value);       // 110
counter.dec(105);
console.log(counter.value);       // 5
counter.dec(20);
console.log(counter.value);       // 0
