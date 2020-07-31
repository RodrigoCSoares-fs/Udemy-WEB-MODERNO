function rand({min = 0, max = 1000}){
  let valor  = Math.random() * (max-min) + min;
  return Math.floor(valor);
}

let obj = {min: 40, max: 50};

console.log(rand(obj));

console.log(rand({min: 40, max: 50}));

console.log(rand({min: 40}));

console.log(rand({}));