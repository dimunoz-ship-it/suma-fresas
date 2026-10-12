// Revisa un campo apenas el usuario sale de él (evento onchange en el HTML).
// Si el valor está fuera de rango, avisa y limpia el campo.
function verificar(id, max) {
  const campo = document.getElementById(id);
  const valor = parseInt(campo.value, 10);

  if (isNaN(valor) || valor < 0 || valor > max) {
    campo.classList.add("invalido");
    mostrarMensaje("Ese valor debe estar entre 0 y " + max);
  } else {
    campo.classList.remove("invalido");
  }
}

function mostrarMensaje(texto) {
  document.getElementById("mensaje").textContent = texto;
}

function calcular() {
  const hi = parseInt(document.getElementById("hi").value, 10);
  const mi = parseInt(document.getElementById("mi").value, 10);
  const si = parseInt(document.getElementById("si").value, 10);
  const hf = parseInt(document.getElementById("hf").value, 10);
  const mf = parseInt(document.getElementById("mf").value, 10);
  const sf = parseInt(document.getElementById("sf").value, 10);

  const sello = document.getElementById("sello");
  sello.classList.remove("visible");

  if (isNaN(hi) || isNaN(mi) || isNaN(si) ||
      hi < 0 || hi > 23 || mi < 0 || mi > 59 || si < 0 || si > 59) {
    mostrarMensaje("Revisa la hora inicial");
    return;
  }

  if (isNaN(hf) || isNaN(mf) || isNaN(sf) ||
      hf < 0 || hf > 23 || mf < 0 || mf > 59 || sf < 0 || sf > 59) {
    mostrarMensaje("Revisa la hora final");
    return;
  }

  const segundosInicial = (hi * 3600) + (mi * 60) + si;
  const segundosFinal = (hf * 3600) + (mf * 60) + sf;

  if (segundosInicial >= segundosFinal) {
    mostrarMensaje("La hora final debe ser mayor que la inicial");
    return;
  }

  const diferencia = segundosFinal - segundosInicial;

  const sr = diferencia % 60;
  const mr = Math.floor(diferencia / 60) % 60;
  const hr = Math.floor(diferencia / 3600);

  document.getElementById("hr").value = hr;
  document.getElementById("mr").value = mr;
  document.getElementById("sr").value = sr;

  mostrarMensaje("");
  sello.classList.add("visible");
}

document.getElementById("btnCalcular").addEventListener("click", calcular);
