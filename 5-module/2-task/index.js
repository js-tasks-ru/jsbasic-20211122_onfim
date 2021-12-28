function toggleText() {
  document.onclick = function(event) {
    let target = event.target; 
    if (target.classList.contains('toggle-text-button')) {
      let textBlock = document.querySelector('#text');
      if(textBlock.getAttribute('hidden')){
        textBlock.removeAttribute('hidden');
      }else{
        textBlock.setAttribute('hidden', true);
      }
      
    }; 
    
  };
}
