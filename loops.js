function forLoop(arr){
  for(let i = 10; i < 35 ; i++){
    if(i === 10){
      arr[11] = "I am 1 strange loop.";
    }
    if(i!== 11){
      arr[i] = "I am " + (i - 10) + " strange loops.";
    }
  }
  return arr;
}