// Obtener los elementos del DOM
const semillaInput = document.getElementById("Semilla");
const semillaDosInput = document.getElementById("semillaDos");
const contadorInput = document.getElementById("contador");
const calcularBtn = document.getElementById("Calcular");
const resultadoTabla = document.getElementById("resultadoTabla");

function calcularProductosMedios(semilla, semillaDos, contador) {
  // Convertir las semillas a números enteros
  semilla = parseInt(semilla);
  semillaDos = parseInt(semillaDos);

  // Validar que las semillas sean números enteros positivos
  if (isNaN(semilla) || isNaN(semillaDos) || semilla < 0 || semillaDos < 0) {
    return "Las semillas deben ser números enteros positivos";
  }

  // Validar que el contador sea un número entero positivo
  contador = parseInt(contador);
  if (isNaN(contador) || contador <= 0) {
    return "El contador debe ser un número entero positivo";
  }

  // Crear la tabla para mostrar los resultados
  let tabla = "<table><tr><th>i</th><th>X(i)</th><th>Y(i)</th><th>X(i+1)</th><th>R(i)</th></tr>";

  // Inicializar el array de valores de xi1
  let xi1Array = [];

  // Realizar las iteraciones
  for (let i = 0; i < contador; i++) {
    // Calcular Y(i)
    const producto = semilla * semillaDos;
    const y = producto.toString().padStart(8, "0");

    // Obtener X(i+1)
    const xi1 = parseInt(y.substring(2, 6));

    // Verificar si el valor de xi1 se ha repetido
    if (xi1Array.includes(xi1)) {
      // Si se ha repetido, mostrar un alert con el valor de xi1 y detener el ciclo
      alert("El valor repetido es: " + xi1);
      break;
    }

    // Agregar el valor de xi1 al array
    xi1Array.push(xi1);

    // Calcular R(i)
    const ri = (xi1 / 10000).toFixed(4);

    // Agregar los valores a la tabla
    tabla += `<tr><td>${i+1}</td><td>${semilla}</td><td>${semillaDos}</td><td>${xi1}</td><td>${ri}</td></tr>`;

    // Actualizar las semillas para la siguiente iteración
    semilla = semillaDos;
    semillaDos = xi1;
  }

  // Cerrar la tabla
  tabla += "</table>";

  // Retornar la tabla con los resultados
  return tabla;
}

// Función para mostrar la tabla con los resultados
function mostrarTabla(event) {
  event.preventDefault();
  const semilla = semillaInput.value;
  const semillaDos = semillaDosInput.value;
  const contador = contadorInput.value;
  const tabla = calcularProductosMedios(semilla, semillaDos, contador);
  resultadoTabla.innerHTML = tabla;
}
// Agregar el evento al botón de calcular
calcularBtn.addEventListener("click", mostrarTabla);

const limpiarBtn = document.getElementById("Borrar");

function limpiarCampos() {
  semillaInput.value = "";
  semillaDosInput.value = "";
  contadorInput.value = "";
  resultadoTabla.innerHTML = "";
}

limpiarBtn.addEventListener("click", limpiarCampos);




