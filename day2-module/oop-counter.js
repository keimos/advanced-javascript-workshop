class Counter {
  // TODO: implement the counter
  constructor(start = 0) {
    this.value = start;
  }
  increment(amt = 1) {
    this.value += amt;
  }
  decrement(amt = 1) {
    this.value = this.value > amt ? this.value - amt : 0
  }
}

// test it out
const counter = new Counter(10);
console.log(counter.value);       // 10
counter.increment();
console.log(counter.value);       // 11
counter.increment(100);
console.log(counter.value);       // 111
counter.decrement();
console.log(counter.value);       // 110
counter.decrement(105);
console.log(counter.value);       // 5
counter.decrement(20);
console.log(counter.value);       // 0
