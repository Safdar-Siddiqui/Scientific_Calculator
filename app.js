var scr = document.getElementById("scr");

function appendToDisplay(value) {
    if(scr.value == "0") {
      scr.value = value;
    }

  else{
  scr.value += value;
  }
}

function clearScr() {
  scr.value = '';
}

function calculate() {
  var a = scr.value;
  if(a.includes("^")){
    var arr = a.split("^");
    var num1 = Number(arr[0]);
    var num2 = Number(arr[1]);
    var result = Math.pow(num1, num2);
    scr.value = result;
  }

  else{
    scr.value = eval(scr.value);
  }
}

function backspace() {
  var scre = document.getElementById('scr').value;
  var screen = scre.slice(0, -1);
  scr.value = screen;
}

function pi() {
  scr.value = Math.PI;
  
}

function sqrt(){
  scr.value = Math.sqrt(scr.value);
}

function sin(){
  scr.value = Math.sin(scr.value);
}

function cos(){
  scr.value = Math.cos(scr.value);
}

function tan(){
  scr.value = Math.tan(scr.value);
}

function log(){
  var scre = document.getElementById('scr').value;
  var screen = Math.log10(scre);
  scr.value = screen;
}

function ln(){
  var num = parseFloat(scr.value);
  num = Math.log(num);
  scr.value = num;
}

function exp(){
  var scre = document.getElementById('scr').value;
  var screen = Math.exp(scre);
  scr.value = screen;
}

function abs(){
  var scre = document.getElementById('scr').value;
  var screen = Math.abs(scre);
  scr.value = screen;
}
function mod(){
  var scre = document.getElementById('scr').value;
  var screen = Math.mod(scre);
  scr.value = screen;
}
function floor(){
  scr.value = Math.floor(scr.value);
}
function ceil(){
  scr.value = Math.ceil(scr.value);
}

function round(){
  scr.value = Math.round(scr.value);
}
function square(){
  var num = scr.value;
  num = num * num;
  scr.value = num;
}

function factorial(){
  var n = scr.value;
  var fact = 1;
  for(var i = 1; i <= n; i++){
    fact = fact * i;
  }
  scr.value = fact;
}

function exponent(){
  var scre = document.getElementById('scr').value;
  var screen = Math.exponent(scre);
  scr.value = screen;
}

function e(){
  scr.value = Math.E;
}