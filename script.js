function init(){
  function eventMessageFunction(){
    var input = document.getElementById('entryinput').value;
    var output = document.getElementById('textoutput');
    output.innerHTML=input;
    alert('Joseph Barron: ' + input);
  }
  var button=document.getElementById('entrybutton');
  button.addEventListener('click', eventMessageFunction);
}  
window.addEventListener('load', init);