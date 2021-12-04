function factorial(n) {
  let b = n;
  let t = n;
  if(t == 0){
    t = 1;
    return t;
  }else{
    for(let i = b; i > 1; i--){
    t = t * (i - 1);
    }
    return t;
    }
}
