export function juegoPreguntasAvanzado(
  btnStart,
  btnExit,
  preguntas,
  menuPrincipal,
  menuPreguntas,
  opcion,
  btnContinue,
  marcador,
  menuPreguntasReset,
  btnExitPreguntas
) {
  const $btnStart = document.querySelector(btnStart);
  const $btnExit = document.querySelector(btnExit);
  const $preguntas = document.querySelector(preguntas);
  const $menuPrincipal = document.querySelector(menuPrincipal);
  const $menuPreguntas = document.querySelector(menuPreguntas);
  const $btnContinue = document.querySelector(btnContinue);
  const $opciones = document.querySelectorAll(opcion);
  const $marcador = document.querySelector(marcador);
  const $menuPreguntasReset = document.querySelector(menuPreguntasReset);
  const $btnMenuExitPreguntas = document.querySelector(btnExitPreguntas);
  let puntajes = 0;
  let preguntasAvanzadas = [
    "¿ Quién fue el autor del último libro de la Biblia?",
    "¿Cuantos libros tiene la Biblia?",
    "Cuál es la capital de Francia",
    "¿Cuál es el resultado de sumar los ángulos internos de un triángulo?",
    "¿Cuántos planetas hay en nuestro sistema solar?",
  ];
  let todasLasRespuestas = [
    ["Pedro", "Mateo", "Juan"],
    [36, 66, 96],
    ["Paris", "Londres", "Berlin"],
    [90, 360, 180],
    [7, 8, 9],
  ];
  let respuestasAvanzadas = ["Juan", 66, "Paris", 180, 8];
  let controladorPreguntas = 0;
  let controlador = 0;
  let controladorRespuestas = 0;
  let contadorPregunta = 0;
  let clickeado = false;
  let opciones = ["a", "b", "c"];
  const mostrarPregunta = () => {
    if (controladorPreguntas < preguntasAvanzadas.length) {
      $menuPreguntasReset.classList.remove("hidden");
      $preguntas.innerHTML = preguntasAvanzadas[controladorPreguntas];
      $opciones.forEach((el) => {
        el.innerHTML += todasLasRespuestas[controladorRespuestas][controlador];
        controlador++;
      });
      controlador = 0;
      controladorRespuestas++;
      controladorPreguntas++;
    } else {
      $btnMenuExitPreguntas.classList.remove("hidden");
      $preguntas.innerHTML = "";
      $menuPreguntasReset.classList.add("hidden");
    }
  };
  const respuestaCorrecta = (e) => {
    let $opcionCorrecta;
    $opciones.forEach((el) => {
      let $i = document.createElement("i");
      if (el.textContent == respuestasAvanzadas[contadorPregunta]) {
        $i.classList.add("fa-solid", "fa-check");
        el.appendChild($i);
        $opcionCorrecta = el.querySelector(" .fa-solid");
        console.log($opcionCorrecta);
        $opcionCorrecta.style.backgroundColor = "green";
      } else {
        $i.classList.add("fa-solid", "fa-xmark");
        el.appendChild($i);
      }
    });
  };
  const reiniciarJuego = () => {
    controladorPreguntas = 0;
    controlador = 0;
    controladorRespuestas = 0;
    puntajes = 0;
    contadorPregunta = 0;
  };
  document.addEventListener("click", (e) => {
    if (e.target.matches(btnStart)) {
      $btnMenuExitPreguntas.classList.add("hidden");
      $menuPrincipal.classList.add("hidden");
      $menuPreguntas.classList.remove("hidden");
      mostrarPregunta();
    }
    if (e.target.matches(btnContinue)) {
      clickeado = false;
      contadorPregunta++;
      $opciones.forEach((el, i) => {
        el.innerHTML = `<i class="fa-solid fa-${opciones[i]}"></i>`;
      });
      mostrarPregunta();
    }
    if (e.target.matches(opcion) && !clickeado) {
      clickeado = true;
      if (e.target.textContent == respuestasAvanzadas[contadorPregunta]) {
        puntajes = puntajes + 10;
        $marcador.innerHTML = puntajes;
        respuestaCorrecta(e);
      } else {
        let opcionIncorrecta = e.target.querySelector(".fa-solid", ".fa-check");
        opcionIncorrecta.style.backgroundColor = "red";
        respuestaCorrecta(e);
      }
    }
    if (e.target.matches(btnExitPreguntas)) {
      reiniciarJuego();
      $menuPrincipal.classList.remove("hidden");
      $menuPreguntas.classList.add("hidden");
    }
  });
}
