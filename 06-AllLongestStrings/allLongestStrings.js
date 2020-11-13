const allLongestStrings = inputArray => {
  let longestLength = 0;
  const longestWords = [];
  
  inputArray.forEach((string) => {
    longestLength = longestLength < string.length ? string.length : longestLength;
  });

  inputArray.forEach((string)=>{
    if (string.length === longestLength){
      longestWords.push(string)
    }
  })

  return longestWords;
}

console.log(allLongestStrings(["abc", "aa", "ad", "def", "ghi"]))
