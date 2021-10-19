const smartGarbage = function (trash, bins) {
  if(trash === "waste"){
    bins.waste ++;
  }else if(trash === "recycling"){
    bins.recycling ++;
  }else if(trash === "compost"){
    bins.compost ++;
  }
  return bins;
}

const bins = {
  waste : 4,
  recycling : 3,
  compost : 5
}

console.log(smartGarbage("recycling", { waste : 4, recycling : 2 , compost : 5}));