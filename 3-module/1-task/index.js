function namify(users) {
  let nameMass = [];
  for(let i = 0; i < users.length; i++ ){
    nameMass.push(users[i].name);
  }
  return nameMass;  
}
