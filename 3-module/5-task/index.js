function getMinMax(str) {
  str = str.split(' ');
  let mass = [];
  for(let i = 0; i < str.length; i++){
    if(isFinite(str[i])){
      mass.push(Number(str[i]));
    }
  }
      
  
  let obj = {
    min: Math.min.apply(Math, mass), 
    max: Math.max.apply(Math, mass)
  }
  return obj;
}
