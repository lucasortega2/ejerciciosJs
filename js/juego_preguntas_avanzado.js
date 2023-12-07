export function juegoPreguntasAvanzado(
  btnStart,
  btnExit,
  preguntas,
  menuPrincipal,
  menuPreguntas,
  opcion,
  btnContinue
) {
  const $btnStart = document.querySelector(btnStart);
  const $btnExit = document.querySelector(btnExit);
  const $preguntas = document.querySelector(preguntas);
  const $menuPrincipal = document.querySelector(menuPrincipal);
  const $menuPreguntas = document.querySelector(menuPreguntas);
  const $btnContinue = document.querySelector(btnContinue);
  const $opciones = document.querySelectorAll(opcion);
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
  let controladorRespuestasAvanzadas = 0;
  let puntaje = 0;
  let controladorPreguntas = 0;
  let controlador = 0;
  let controladorRespuestas = 0;

  const mostrarPregunta = () => {
    if (controladorPreguntas < preguntasAvanzadas.length) {
      $preguntas.innerHTML = preguntasAvanzadas[controladorPreguntas];
      $opciones.forEach((el) => {
        el.innerHTML += todasLasRespuestas[controladorRespuestas][controlador];
        controlador++;
      });
      controlador = 0;
      controladorRespuestas++;
      controladorPreguntas++;
    } else {
      $preguntas.innerHTML = "";
      let $butonExit = document.createElement("button");
      $butonExit.classList.add("btn-juego-continue", "btn-menu-exit");
      $butonExit.textContent = "Exit";
      document.querySelector(".preguntas-menu-1").innerHTML = "";
      document.querySelector(".preguntas-menu-1").appendChild($butonExit);
    }
  };
  document.addEventListener("click", (e) => {
    if (e.target.matches(btnStart)) {
      $menuPrincipal.classList.add("hidden");
      $menuPreguntas.classList.remove("hidden");
      mostrarPregunta();
    }
    if (e.target.matches(btnContinue)) {
      let i = 1;
      $opciones.forEach((el) => {
        el.innerHTML = `<i class="fa-solid fa-${i}"></i>`;
        i++;
      });

      mostrarPregunta();
    }
    if (
      e.target.matches(opcion) &&
      e.target.textContent ==
        respuestasAvanzadas[controladorRespuestasAvanzadas]
    ) {
      puntaje += 10;
      controladorRespuestasAvanzadas++;
      alert(`Muy bien sumaste 10 puntos! En total tenes${puntaje} puntos!`);
    }
    if (e.target.matches(opcion)) {
      console.log(e.target.textContent);
      console.log(respuestasAvanzadas[controladorRespuestasAvanzadas]);
    }
    if (e.target.matches(btnExit)) {
      console.log("exit");
    }
  });
}
