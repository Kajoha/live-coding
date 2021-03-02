/**
 * Live Coding 1
 *
 * Cuando el parqueo este lleno (para la casa)
 *
 *  6.1 cambiamos el texto a: "Parqueo lleno" en rojo.
 *  6.2. deshabiltamos el formulario, tanto el input como el boton
 *
 *  Para deshabilitar elemntos del formulario se usa el attr
 *  disabled, ejemplo: <button disabled="true">Agregar</button>
 *
 *  setAttribute
 *  removeAttribute
 *
 **/

const formulario = document.querySelector("form");
const table = document.querySelector("table");
const input = document.querySelector('form input[type="text"]');

table.addEventListener("click", e => {
  if (e.target.tagName === "BUTTON") {
    e.target.parentElement.innerHTML = "";
    actualizarMensaje();
  }
});
const crearElementos = (hora, placa) => {
  const celdaVacia = document.querySelector("td:empty");
  const vehiculoIcono = document.createElement("span");
  const placaNuevoIngreso = document.createElement("small");
  const horaNuevoIngreso = document.createElement("small");
  const botonEliminar = document.createElement("button");
  vehiculoIcono.innerText = "🚗";
  placaNuevoIngreso.innerText = placa;
  horaNuevoIngreso.innerText = hora;
  botonEliminar.innerText = "Eliminar";
  celdaVacia.appendChild(vehiculoIcono);
  celdaVacia.appendChild(placaNuevoIngreso);
  celdaVacia.appendChild(horaNuevoIngreso);
  celdaVacia.appendChild(botonEliminar);
};

const actualizarMensaje = () => {
  // Guardar el b dentro del h3
  const espaciosLibres = document.querySelector("body h3");
  // Agarrar todos las celdas vacias
  const celdasVacias = document.querySelectorAll("td:empty");
  // Agregar la cantidad de celdas vacias a `espaciosLibres`
  espaciosLibres.innerText = celdasVacias.length;

  const botonLlamada = document.querySelector("form button");

  if (celdasVacias.length == 0) {
    espaciosLibres.innerText = "Parqueo lleno";
    espaciosLibres.classList.add("red");
    input.disabled = true;
    botonLlamada.disabled = true;
  } else {
    espaciosLibres.innerHTML = `<h3>Tienes <b>${
      celdasVacias.length
    }</b> parqueos libres</h3>`;
    espaciosLibres.classList.remove("red");
    input.disabled = false;
    botonLlamada.disabled = false;
  }
};

formulario.addEventListener("submit", e => {
  e.preventDefault();
  const fecha = new Date();
  const horaActual = fecha.getHours() + ":" + fecha.getMinutes();
  if (input.value) {
    crearElementos(horaActual, input.value);
    actualizarMensaje();
  } else {
    alert("Favor ingrese una placa");
  }
  input.value = "";
});

actualizarMensaje();
