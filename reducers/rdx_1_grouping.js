const arr = [
    { name: "Apply", category: "Fruit" },
    { name: "Orange", category: "Fruit" },
    { name: "Tomato", category: "Vegetable" },
    { name: "Potato", category: "Vegetable" }
];

const reducer = (acc, product) => {
    const { name, category } = product;
    acc[category] = acc[category] || [];
    //This checks whether acc (the accumulator object) already has a property for the current category.
    //If not, it initializes that property as an empty array ([])
    acc[category].push(name);
    return acc;
};

const result = arr.reduce(reducer, {});
console.log(result);