// Mission 1
const add = (nbr1, nbr2) => nbr1 + nbr2;

console.log(add(1,2));
console.log(add(3,2));

// Mission 2
const add2 = (...numbers) => numbers.reduce((total, currentValue) => total + currentValue)

console.log(add2(1,2,3,4,5));
console.log(add2(2,3))
