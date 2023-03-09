const calcular = document.getElementById("Calcular");
const resultadoDiv = document.getElementById("resultado"); // seleccionamos el elemento donde mostraremos el resultado

calcular.addEventListener("click", () => {
  const semilla = document.getElementById("Semilla").value;
  const contador = document.getElementById("contador").value;
  let resultado = parseInt(semilla);
  let resultadoFinal = "";
  let variableSemilla = "";
  let variableX = resultado;
  let variableR = "";

  let tabla = "<table>";
  tabla += "<tr><th>Iteración</th><th>X</th><th>X^2</th><th>Cifras centrales</th><th>R</th></tr>";

 
  for (let i = 1; i <= contador; i++) {
    resultado = variableX * variableX;
    let resultadoStr = resultado.toString();
    
    // Agregamos ceros al inicio si el resultado tiene menos de la longitud de la semilla
    if (resultadoStr.length < semilla.length) {
      resultadoStr = "0".repeat(semilla.length - resultadoStr.length) + resultadoStr;
    }
    
    // Agregamos ceros al inicio si el resultado tiene menos de 8 cifras
    if (resultadoStr.length < 8) {
      resultadoStr = "0".repeat(8 - resultadoStr.length) + resultadoStr;
    }
    
    let cifrasCentrales = obtenerCifrasCentrales(resultadoStr, semilla.length);
    
    variableR = "0." + obtenerCifrasCentrales(resultadoStr, semilla.length);

    tabla += "<tr>";
    tabla += "<td>" + i + "</td>";
    tabla += "<td>" + variableX + "</td>";
    tabla += "<td>" + resultado + "</td>";
    tabla += "<td>" + cifrasCentrales + "</td>";
    tabla += "<td>" + variableR + "</td>";
    tabla += "</tr>";
    variableX = parseInt(cifrasCentrales);
}

tabla += "</table>";
resultadoDiv.innerHTML = tabla; // agregamos la tabla al contenido del div
});

function obtenerCifrasCentrales(str, numCifras) {
const offset = Math.floor((str.length - numCifras) / 2);
return str.substr(offset, numCifras);
}

const borrar = document.getElementById("Borrar");
borrar.addEventListener("click", () => {
  resultadoDiv.innerHTML = ""; // Limpiamos el contenido de la tabla de resultados
  document.getElementById("Semilla").value = ""; // Limpiamos el valor del campo Semilla
  document.getElementById("contador").value = ""; // Limpiamos el valor del campo contador
});







