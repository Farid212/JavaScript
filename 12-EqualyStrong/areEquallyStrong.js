const areEquallyStrong = (yourLeft, yourRight, friendsLeft, friendsRight) =>{
    const yourStrongest = yourLeft <= yourRight ? yourLeft : yourRight;
    const yourWeakest = yourLeft >= yourRight ? yourLeft : yourRight;
    const freindsStrongest = friendsLeft <= friendsRight ? friendsLeft : friendsRight;
    const friendsWeakest = friendsLeft >= friendsRight ? friendsLeft : friendsRight;

    return (yourStrongest === freindsStrongest && yourWeakest === friendsWeakest) 
}

console.log(areEquallyStrong(10, 15, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 10))
console.log(areEquallyStrong(10, 15, 15, 9))