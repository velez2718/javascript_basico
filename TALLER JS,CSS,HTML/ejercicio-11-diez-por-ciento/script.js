// Formatea números (hasta 10 decimales, sin ceros sobrantes)
const fmt = n => (Number.isFinite(n) ? String(+n.toFixed(10)) : "indefinido");

const entradas = Array.from(document.querySelectorAll(".campos input"));
const caja = document.getElementById("resultado");
const textoInicial = caja.textContent;

const num = id => Number(document.getElementById(id).value);

// Muestra una lista de [texto, valor] dentro de la caja
function mostrar(filas) {
  caja.innerHTML = filas
    .map(([t, v]) => `${t}: <strong>${typeof v === "number" ? fmt(v) : v}</strong>`)
    .join("<br>");
}

function calcular() {
  const valor = num("valor");
  const porcentaje = valor * 0.10;
  mostrar([["El 10% es", porcentaje]]);
}

// Si todos los campos tienen un número válido, calcula solo; si no, vuelve al mensaje inicial
function actualizar() {
  const completo = entradas.every(i => i.value.trim() !== "" && Number.isFinite(Number(i.value)));
  if (completo) calcular();
  else caja.textContent = textoInicial;
}
entradas.forEach(i => i.addEventListener("input", actualizar));

// Ejercicio sin campos: muestra el resultado al abrir la página
if (entradas.length === 0) calcular();
