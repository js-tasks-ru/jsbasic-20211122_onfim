function camelize(str) {
  str = str.split('-');
  let mass = [];
  for(let i = 0; i < str.length; i++){
    if(i == 0){
      mass.push(str[i]);
    }else{
      let str2 = str[i].charAt(0).toUpperCase() + str[i].slice(1);
      mass.push(str2);
    }
  }
  mass = mass.join('');
  return mass;
}
