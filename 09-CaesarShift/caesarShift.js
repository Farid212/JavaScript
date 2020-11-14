const caesarShift = inputString =>{
    const caesarAlphabet = {
        'a':'x',    'b':'y',    'c':'z',    'd':'a',    'e':'b',
        'f':'c',    'g':'d',    'h':'e',    'i':'f',    'j':'g',
        'k':'h',    'l':'i',    'm':'j',    'n':'k',    'o':'l',
        'p':'m',    'q':'n',    'r':'o',    's':'p',    't':'q',
        'u':'r',    'v':'s',    'w':'t',    'x':'u',    'y':'v',
        'z':'w',    ' ': ' '
    };

    let inputShifted = inputString.toLowerCase().split('');

    for (let i = 0; i < inputShifted.length; i++) {
        inputShifted[i] = caesarAlphabet[inputShifted[i]];
    }

    return inputShifted.join('');
}

console.log(caesarShift('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG'))