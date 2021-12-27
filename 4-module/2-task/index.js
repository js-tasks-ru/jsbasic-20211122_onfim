function makeDiagonalRed(table) {
  let tableCelsCount =  table.rows;
  for (let i = 0; i < tableCelsCount.length; i++){
    let cell = table.rows[i].cells[i];
    cell.style.backgroundColor = 'red';
  }
}
