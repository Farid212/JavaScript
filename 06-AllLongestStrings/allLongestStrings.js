const allLongestStrings = inputArray => {
  let longestLength = 0;
  const longestStrings = [];
  
  inputArray.forEach((string) => {
    longestLength = longestLength < string.length ? string.length : longestLength;
  });

  inputArray.forEach((string)=>{
    if (string.length === longestLength){
      longestStrings.push(string)
    }
  })

  return longestStrings;
}

console.log(allLongestStrings(["abc", "aa", "ad", "def", "ghi"]))
