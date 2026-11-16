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
  const n1 = num("n1");
  const n2 = num("n2");
  const n3 = num("n3");
  const n4 = num("n4");
  const n5 = num("n5");
  const suma = n1 + n2 + n3 + n4 + n5;
  const r1 = suma - n1 - n2 - n3;
  const r2 = suma - n4 - n5;
  const multiplicacion = r1 * r2;
  const division = multiplicacion === 0 ? NaN : suma / multiplicacion; // evita dividir por 0
  mostrar([
    ["Suma", suma],
    ["Resta de los 3 primeros valores", r1],
    ["Resta de los 2 ultimos valores", r2],
    ["Multiplicacion", multiplicacion],
    ["Division", division]
  ]);
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
