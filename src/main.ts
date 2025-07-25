//obteniendo elementos del DOM

const $contadorDom = document.getElementById("contador") as HTMLSpanElement;

const $boton = document.getElementById(  "btnContadorIncrementar") as HTMLButtonElement;

const $boton1= document.getElementById("btnContadorDecrementar") as HTMLButtonElement;

let contador = 0;

const incrementarContador = (): void => {
  contador += 1;

  if ($contadorDom) {
    $contadorDom.textContent = contador.toString();
  }
};

if ($boton) {
  $boton.addEventListener("click", incrementarContador);
}

// Agregando funcionalidad al botón de decrementar contador
const decrementarContador = (): void => {
  contador -= 1;

  if ($contadorDom) {
    $contadorDom.textContent = contador.toString();
  }
};

if ($boton1) {
  $boton1.addEventListener("click", decrementarContador);
}


