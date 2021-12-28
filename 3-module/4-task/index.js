function showSalary(users, age) {
  let massUserInAge = [];
  for(let i = 0; i < users.length; i++){
    if(users[i].age <= age){
      
      massUserInAge.push(users[i].name+', '+users[i].balance)
    }
    
  }
  let userString = massUserInAge.join('\n');
  return userString;
}
