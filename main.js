var segundos = "00";
var minutos = "25";

var play = new Audio("play.mp3");
var sino = new Audio("alerta.mp3");

function corpo() {
  document.getElementById("minutos").innerHTML = minutos;
  document.getElementById("segundos").innerHTML = segundos;
}

function start_timer() {
  play.play();

  minutos = 24;
  segundos = 59;

  document.getElementById("minutos").innerHTML = minutos;
  document.getElementById("segundos").innerHTML = segundos;

  var minutos_interval = setInterval(minutosTempo, 60000);
  var segundos_interval = setInterval(segundosTempo, 1000);

  function minutosTempo() {
    minutos = minutos - 1;
    document.getElementById("minutos").innerHTML = minutos;
  }

  function segundosTempo() {
    segundos = segundos - 1;
    document.getElementById("segundos").innerHTML = segundos;

    if (segundos <= 0) {
      if (minutos <= 0) {
        clearInterval(minutos_interval);
        clearInterval(segundos_interval);

        sino.play();
        window.alert("Ciclo completo, faça um intervalo!");
      }
    }
  }
}