function ucFirst(str) {
  let firstLetter = str.slice(0, 1);
  let otherString = str.slice(1,  str.lenght);
  return firstLetter.toUpperCase()+otherString;
}
