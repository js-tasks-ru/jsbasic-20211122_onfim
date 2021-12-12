function sumSalary(salaries) {
  let salary = 0;
  for (key in salaries) {
    if(typeof salaries[key] === 'number' &&  !isNaN(salaries[key]) && isFinite(salaries[key])){
      salary += salaries[key];
    }
  }
  return salary;
}
