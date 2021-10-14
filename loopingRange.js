const range = function(start,end,step){
  var numbers = [];

  if (start === undefined || end === undefined || step === undefined){
    return [];
  }else if(start > end){
    return [];
  }else if(step <= 0 ){
    return [];
  }else if(end > start){
    for (let i = start; i <= end; i += step){
      numbers.push(i);
    }
    return numbers;
  }
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));