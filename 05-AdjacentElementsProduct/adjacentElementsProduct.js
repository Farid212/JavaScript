const adjacentElementsProduct = inputArray => {
  // set default value eassy to compare
  let largestProduct = inputArray[0] * inputArray[1];

  // skip 1 in begining and skip 1 in the end
  for(let i = 1; i < inputArray.length -1; i++){
    // creation of the production to compare with existing one.
    const product = inputArray[i] * inputArray[i + 1];
    // if the largestProduct is less than product, return product or return largestProduct
    largestProduct = largestProduct < product ? largestProduct;
  }

  return largestProduct;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
