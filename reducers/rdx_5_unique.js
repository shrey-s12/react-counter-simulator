const numbers = [1, 2, 2, 3, 4, 4, 5, 1, 5];

const reducer = (acc, num) => {
    if (!acc.includes(num)) {
        acc.push(num);
    }
    return acc;
}

const result = numbers.reduce(reducer, []);
console.log(result)