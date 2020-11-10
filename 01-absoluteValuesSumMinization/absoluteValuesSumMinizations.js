function absoluteValuesSumMinimization(array){
    const isEven = array.length % 2 === 0; 
    // if array !isEven the array's length divide by 2 floored
    // else it'll render last number of first half of array
    return isEven ? array[array.length / 2 - 1] : array[Math.floor(array.length / 2)];
}

console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));


/**
* **Example** 
*  For a = [2, 4, 7], the output should be
*  absoluteValuesSumMinimization(a) = 4.
*
*   For a = [2, 4, 7, 6], the output should be
*  absoluteValuesSumMinimization(a) = 4.
*
*   For a = [2, 4, 7, 6, 6], the output should be
*  absoluteValuesSumMinimization(a) = 7.
*
*   For a = [2, 4, 7, 6, 6, 8], the output should be
*  absoluteValuesSumMinimization(a) = 7.
* */