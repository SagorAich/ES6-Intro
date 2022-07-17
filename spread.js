const numbers=[23,20,99,20,12,13];
// console.log(numbers);
// console.log(...numbers);

const max=Math.max(...numbers);
//console.log(max);

const numbers2=[...numbers];
numbers2.push(55);
console.log(numbers);
console.log(numbers2);

const myFunction = () => console.log('Nayok!');