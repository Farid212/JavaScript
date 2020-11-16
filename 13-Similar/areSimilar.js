const areSimilar = (arrayA, arrayB) =>{
    const arrayC = [];
    let arrayD = [];

    if (arrayA.toString() === arrayB.toString()) {
        return true;
    } 

    for (let i = 0; i < arrayA.length; i++) {
        if(arrayA[i] !== arrayB[i]){
            arrayC.push(arrayA[i]);
            arrayD.push(arrayB[i]);
        }
    }

    console.log(arrayC, arrayD)

    arrayD = arrayD.reverse();

    console.log(arrayD)

    if(arrayD.length === 2 && arrayD.toString() === arrayC.toString()){
        return true;
    }

    return false;
}

console.log(areSimilar([1,2,3],[1,2,3]));
console.log(areSimilar([1,2,3],[2,1,3]));
console.log(areSimilar([1,2,3],[2,1,1]));
