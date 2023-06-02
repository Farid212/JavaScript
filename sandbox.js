// const app = arr =>{
//     let min = null;
//     let max = null;

//     for(let i=0; i <arr.length-1; i++){
//         if(arr[i]){
//             min += arr[i]
//         }
//     }
//     for(let i=1; i <=arr.length; i++){
//         if(arr[i]){
//             max += arr[i]
//         }
//     }

//     console.log(min,max)
//     return [min, max]
// }

// console.log(app([1,2,3,4,5]))
// console.log(app([7,69,2,221,8974]))

// const time = s =>{
//     const pm = /PM/g
//     const h = /^\d{0,2}/g
//     const tested = pm.test(s);
//     console.log(!tested)
//     if(s === '12:00:00AM'){
//         s = '00:00:00'
//     }
//     if(!tested){
//         s = s.replace('AM', '')
//     }
//     if(tested){
//         let hour = (parseInt(s.slice(0, 2)) + 12).toString();
//         console.log(hour)
//         console.log(typeof hour)

//         s = s.replace(h, hour)
//         s = s.replace(pm, '')
//     }   

//     return s
// }

// console.log(time('08:05:45PM'))
// console.log(time('12:00:00AM'))
// console.log(time('12:45:54PM'))
// console.log(time('12:05:39AM'))
// console.log(time('12:40:22AM'))

// const plusMinus = arr =>{
//     let pos = 0;
//     let neg = 0;
//     let zero = 0;
//     for(let i = 0; i<arr.length; i++){
//         console.log(Math.sign(arr[i]))
//         if(Math.sign(arr[i]) == -1){
//             neg++
//         }
//         else if(Math.sign(arr[i]) == 1){
//             pos++
//         }
//         else{
//             zero++
//         }
//     }
//     pos = pos/arr.length
//     neg = neg/arr.length
//     zero = zero/arr.length

//     return (pos + " " + neg +  " " + zero)
// }

// console.log(plusMinus([-4, 3, -9, 0, 4, 1]))
// console.log(plusMinus([1,2,3,-1,-2,-3,0,0]))

function birthdayCakeCandles(candles) {
    // Write your code here
    console.log(candles)
    class hashtable{
        constructor(key, obj){
            this.key = key;
            this.obj = obj;
            this.next = null;
        }
        calculateHash(key) {
            return key.toString().length % this.size;
        };
        
        add(key, value) {
            const hash = this.calculateHash(key);
            If (!this.values.hasOwnProperty(hash)) {
              this.values[hash] = {};
            }
            if (!this.values[hash].hasOwnProperty(key)) {
               this.length++;
            }
            this.values[hash][key] = value;
        }
        
        search(key) {
             const hash = this.calculateHash(key);
             if (this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)) {
               return this.values[hash][key];
             } else {
               return null;
             }
        }
    }

    let hash = new hashtable();
    console.log(hash)
    console.log(candles)

    let max = 0;

    for (let i = 0; i < candles.length; i++) {
        let r = hash.search(candles[i])

        if(r == null){
            console.log(candles[i])
            hash.add(candles[i], 1)
            if(max<1){
                max=1
            }
        }
        else{
            hash.add(candles[i], r++)
            if(max<r++){
                max=r++
            }
        }
    }
    
    console.log(hash.key)
    return max
}


console.log(birthdayCakeCandles([3, 2, 1, 3]))