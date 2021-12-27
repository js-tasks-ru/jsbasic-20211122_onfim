function hideSelf() {
  document.onclick = function(event) {
    let target = event.target; 
    if (target.classList.contains('hide-self-button')) {
      target.setAttribute('hidden', true);
    }; 
    
  };
}
