function checkSpam(str) {
  let strig = str.toLowerCase();
  let findStigX = 'XXX';
  let findStringBet = '1xBet';
  if(strig.indexOf(findStigX.toLowerCase()) !== -1 || strig.indexOf(findStringBet.toLowerCase()) !== -1){
    return true;
  }else{
    return false;
  }
}
