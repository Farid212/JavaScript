const alternatingSums = array => {
    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < array.length; i++) {
        if(i%2===0){
            evenSum += array[i]
        } else{
            oddSum +=array[i]
        }    
    }
    return [evenSum, oddSum]
}

console.log(alternatingSums([50,60,60,45,70]))