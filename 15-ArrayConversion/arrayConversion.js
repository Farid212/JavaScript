const arrayChange = inputArray => {
    let isOdd = inputArray.length %2 === 0;

    // each iterations will divide array/2
    while(inputArray.length !== 1){
        console.log(inputArray.length)
        inputArray = sumProduct(inputArray, isOdd);
        console.log(inputArray)
        isOdd = !isOdd;
    }

    return inputArray[0];
}

const sumProduct = (numbers, isOdd) => {
    const sumProducts = [];

    if (isOdd) {
        for (let i = 0; i< numbers.length; i+=2) {
           sumProducts.push(numbers[i] + numbers[i + 1])
        }
    }else{
        for (let i = 0; i< numbers.length; i+=2) {
            sumProducts.push(numbers[i] * numbers[i + 1])
        }
    }

    return sumProducts;
}

console.log(arrayChange([1,2,3,4,5,6,7,8]));