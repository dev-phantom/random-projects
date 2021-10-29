var a = 0;
function add() {
  a++
  document.getElementById('counter').innerHTML = a;
}
function subtract() {
  if (a == 0) {
    return false
  }else{
  a--
  document.getElementById('counter').innerHTML = a;
  }
}
