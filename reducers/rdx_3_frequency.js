const arr = ["a", "b", "b", "c", "a", "b"];

const reducer = (acc, ele) => {
    acc[ele] = acc[ele] || 0;
    // OR
    // if (!acc[ele]) {
    //     acc[ele] = 0;
    // }

    acc[ele]++;
    return acc;
};

const result = arr.reduce(reducer, {});
console.log(result);