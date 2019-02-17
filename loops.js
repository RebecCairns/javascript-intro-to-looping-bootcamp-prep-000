function forLoop(arr){
  for(let i = 10; i < 35 ; i++){
    if(i === 10){
      arr[10] = "I am 1 strange loop.";
    }
    if(i!== 10){
      arr[i] = "I am " + (i - 9) + " strange loops.";
    }
  }
  return arr;
}