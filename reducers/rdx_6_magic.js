const dub = (x) => +("" + x + x);
const divideBySeven = (x) => x / 7;
const divideByEleven = (x) => x / 11;
const divideByThirteen = (x) => x / 13;

const pipeline = [dub, divideBySeven, divideByEleven, divideByThirteen];
const value = 345;

const result = pipeline.reduce((acc, fn) => fn(acc), value);
console.log(result)