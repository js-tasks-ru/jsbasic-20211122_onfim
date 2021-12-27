function highlight(table) {
  let bodes = table.tBodies;
  let tableTbody =  bodes[0].rows;
  for (let i = 0; i < tableTbody.length; i++){
    let cellHas = bodes[0].rows[i].cells[3].hasAttribute('data-available');
    let gender = bodes[0].rows[i].cells[2].textContent;
    let age = bodes[0].rows[i].cells[1].textContent;
    if(age < 18){
      bodes[0].rows[i].style.textDecoration = "line-through";
    }
    if(gender === 'm'){
      bodes[0].rows[i].classList.add("male");
    }else{
      bodes[0].rows[i].classList.add("female");
    }
    if(cellHas){
      let cellAttr = bodes[0].rows[i].cells[3].getAttribute('data-available');
      if(cellAttr === 'true'){
        bodes[0].rows[i].classList.add("available");
      }else{
        bodes[0].rows[i].classList.add("unavailable");
      }
    }else{
      bodes[0].rows[i].setAttribute('hidden', 'true');
    }
  }
}
