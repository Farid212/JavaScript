const alphabeticShift = (inputString) =>{
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    let inputShifted = inputString.split('');

    for (let i = 0; i < inputShifted.length; i++) {
        let indexValue = 0;
        if(inputShifted[i] !== 'z'){
            indexValue = alphabet.indexOf(inputShifted[i])+1;
        }
        inputShifted[i] = alphabet[indexValue];
    }
    return inputShifted.join('');
}

console.log(alphabeticShift('crazy'));