document.addEventListener("DOMContentLoaded", () => {
    const textoColor = document.getElementById("texto-color");
    const botonColor = document.getElementById("boton-color");
  
    botonColor.addEventListener("click", cambiarColorTexto);
  
    function cambiarColorTexto() {
      let listaDeColores = ["#FF0000", "#00FF00", "#0000FF"];
      let colorElegido = Math.floor(Math.random() * listaDeColores.length);
  
      textoColor.style.color = listaDeColores[colorElegido];
    }
  });
  