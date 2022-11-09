function init(){
  function eventMessageFunction(){
    var input=document.getElementById('entryinput').value;
    var output=document.getElementById('textoutput');
    output.innerHTML=input;
    alert('Joseph Barron: '+input);
  }
window.addEventListener('load', init);