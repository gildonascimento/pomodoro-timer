var segundos = "00";
var minutos = "25";

var play = new Audio("play.mp3");
var sino = new Audio("alerta.mp3");

function corpo() {
  document.getElementById("minutos").innerHTML = minutos;
  document.getElementById("segundos").innerHTML = segundos;
}