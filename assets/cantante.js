// Definir las respuestas correctas
const respuestasCorrectas = {
    0: "4", // ID de la pregunta y valor de la respuesta correcta
    1: "2",
    2: "3",
    3: "4",
    4: "2",
    5: "3"
};



// Almacenar los puntos
let puntos = 0;

// Función para manejar la respuesta
function respuesta(preguntaId, input) {
    // Verifica si la respuesta es correcta
    if (input.value === respuestasCorrectas[preguntaId]) {
        puntos += 4; // Incrementa los puntos si es correcta
    }
}

// Función para mostrar el resultado
function verResultado() {
    // Mostrar el puntaje
    document.getElementById('aciertos').innerText = `Tu puntaje es: ${puntos} puntos`;
}

// Función para reiniciar el juego
function reiniciarJuego() {
    // Reiniciar el puntaje
    puntos = 0;

    // Deseleccionar todas las respuestas
    document.querySelectorAll('input[type="radio"]').forEach(input => {
        input.checked = false;
    });

    // Limpiar el resultado
    document.getElementById('aciertos').innerText = '';
}

// Agregar el evento de reinicio al botón de volver a jugar
document.querySelector('button a').addEventListener('click', reiniciarJuego);

let hr = min = sec = ms = "0" + 0, startTimer;

const startBtn = document.querySelector(".start");
  stopBtn = document.querySelector(".stop");
  resetBtn = document.querySelector(".reset");

  startBtn.addEventListener("click" , start);
  stopBtn.addEventListener("click" , stop);
  resetBtn.addEventListener("click" , reset);

  function start() {
  startBtn.classList.add("active");
  stopBtn.classList.remove("stopActive");

  startTimer = setInterval(() => {
    ms++;
    ms = ms < 10 ? "0" + ms : ms;

    if(ms == 100){
        sec++;
        sec = sec < 10 ? "0" + sec : sec ;
        ms = "0" + 0;
    }
    if(sec == 60){
        min++;
        min = min < 10 ? "0" + min : min ;
        sec = "0" + 0;
    } 
    if(min == 60){
        hr++;
        hr  = hr < 10 ? "0" + hr : hr ;
        min = "0" + 0;
    } 

    putValue();

  }, 10);
  }

  function stop(){
  startBtn.classList.remove("active");
  stopBtn.classList.remove("stopActive");
  clearInterval(startTimer)

  }
  function reset(){
    startBtn.classList.remove("active");
    stopBtn.classList.remove("stopActive");
    clearInterval(startTimer)
    hr = min = sec = ms = "0" + 0;
    putValue();
  }

  function putValue() {
    document.querySelector('.millisecond').innerHTML = ms;
    document.querySelector('.second').innerHTML = sec;
    document.querySelector('.minute').innerHTML = min;
    document.querySelector('.hour').innerHTML = hr;
  }

