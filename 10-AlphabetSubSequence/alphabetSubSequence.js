const alphabetSubSequence = String  => {
  const chars = String.split('');
  const charsValues = [];

  chars.forEach(char => {
    charsValues.push(char.charCodeAt(0))
  });

  // new Set() is kinda create new array without the duplicate.
  // if duplicate has been catch the array tested is OUT (false)
  if(new Set(charsValues).size !== charsValues.length){
    return false;
  };

  for (let i = 0; i < charsValues.length -1; i++) {
    // if n > n+1 = array OUT (false)
    if(charsValues[i]>= charsValues[i+1]){
      return false;
    };
  };

  return true;
};

console.log(alphabetSubSequence('effg')); // false
console.log(alphabetSubSequence('cdce')); //false
console.log(alphabetSubSequence('ace')); // true
console.log(alphabetSubSequence('bxz')); //true
console.log(alphabetSubSequence('bxe')); //false