const app = (a, b) => {
  let aScore = 0;
  let bScore = 0;


  for(let i = 0; i<a.length; i++){
      if(a[i]>b[i]){
        aScore++
      }else {
        bScore++
      }
  }

  return [aScore, bScore];
}
