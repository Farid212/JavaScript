const addBorder = (pictureAsArray) => {
    // fingerprint of pics size
    const lengthOfPicture = pictureAsArray[0].length + 2;
    // set border as empty string
    let border = '';
    // loop through size and add one * for each unit
    for (let i = 0; i<lengthOfPicture; i++){
        border = border.concat('*');
    }
    // picture + up border
    pictureAsArray.unshift(border);
    //  picture + bottom border
    pictureAsArray.push(border);

    // add border to all a[i] unless a[first] and a[last] 
    for (let i = 1; i<pictureAsArray.length -1; i++){
        pictureAsArray[i] = '*'.concat(pictureAsArray[i], '*');
    }
    
    return pictureAsArray;
}

console.log(addBorder(["hello", "olleh"]));
console.log(addBorder(['1234','4568']))