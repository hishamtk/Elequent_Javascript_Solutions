let bigArray = [
  ["hello", "there", "Hai"],
  ["what", "is", "going"],
  ["how", "you", "doing"],
];

let singleArray = bigArray.reduce((acum,currValue)=> acum.concat(currValue));
console.log(singleArray);