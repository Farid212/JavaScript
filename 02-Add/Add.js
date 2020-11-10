// Mission 1
const add = (nbr1, nbr2) => nbr1 + nbr2;

console.log(add(1,2));
console.log(add(3,2));

// Mission 2
const add2 = (...numbers) => {
  let total = 0;
  numbers.forEach((number) =>  total += number);
  return total;
}

console.log(add2(1,2,3,4,5));
console.log(add2(2,3))
