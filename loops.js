function forLoop(arr){
  for(let i = 0; i < 25 ; i++){
    if(i === 0){
      arr[arr.length + i] = "I am 1 strange loop.";
    }
    if(i!== 0){
      arr[arr.length + i] = "I am " + (i + 1) + " strange loops.";
    }
  }
  return arr;
}