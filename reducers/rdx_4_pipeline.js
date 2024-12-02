const addOne = (x) => x + 1;
const double = (x) => x * 2;
const subtractThree = (x) => x - 3;

const pipeline = [addOne, double, subtractThree];
const value = 5;

const result = pipeline.reduce((acc, fn) => fn(acc), value);
console.log(result);