function truncate(str, maxlength) {
  if(str.length >= maxlength){
    let mainstr =  str.substring(0, maxlength-1);
    return mainstr + "…";
  }else{
    return str;
  }
}
