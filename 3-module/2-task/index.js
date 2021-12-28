function filterRange(arr, a, b) {
  let newMass = [];
    for(let i=0; i < arr.length; i++){
      
      if(arr[i] >= a && arr[i] <= b){
        newMass.push(arr[i]);
      }
    }
    return newMass;
}
