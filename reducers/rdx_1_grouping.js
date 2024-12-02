const arr = [
    { name: "Apply", category: "Fruit" },
    { name: "Orange", category: "Fruit" },
    { name: "Tomato", category: "Vegetable" },
    { name: "Potato", category: "Vegetable" }
];

const reducer = (acc, product) => {
    const { name, category } = product;
    acc[category] = acc[category] || [];
    acc[category].push(name);
    return acc;
};

const result = arr.reduce(reducer, {});
console.log(result);