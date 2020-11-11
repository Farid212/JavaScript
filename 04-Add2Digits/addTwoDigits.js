const addTwoDigits = (number) => {
    const n = number.toString().split('');
    return parseInt(n[0]) + parseInt(n[1])
}

console.log(addTwoDigits(54))