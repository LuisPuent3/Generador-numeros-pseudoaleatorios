function generar() {
  var semilla = parseInt(document.getElementById("semillas").value);
  var constante = parseInt(document.getElementById("k").value);
  var modulo = parseInt(document.getElementById("g").value);
  var cantidad = parseInt(document.getElementById("cantidad").value);

  // Verificar condiciones necesarias
  if (semilla % 2 !== 0 && Number.isInteger(modulo)){
    var numeros = [];
    var x = semilla;

    var numero = semilla;
    var r;
    var rValues = [];

    // Guardar el valor del módulo como una variable
    var moduloPotencia = Math.pow(2,modulo);

    // Crear tabla
    var table = document.createElement("table");
    var headerRow = table.insertRow();
    headerRow.insertCell().appendChild(document.createTextNode("i"));
    headerRow.insertCell().appendChild(document.createTextNode("X[i]"));
    headerRow.insertCell().appendChild(document.createTextNode("número generado"));
    headerRow.insertCell().appendChild(document.createTextNode("r"));

    for (var i = 0; i < cantidad; i++) {
      numero = (modulo + 8*constante)*numero % moduloPotencia;
      r = numero/(moduloPotencia - 1);
      numeros.push(numero);

      // Calcular valores para mostrar en la tabla
      var xi = "X" + (i+1);
      var xVal = "(" + x + "*" + constante + ") mod " + moduloPotencia + " = " + numero;
      var rVal = "r" + (i+1) + " = " + r.toString().substring(0, 6);

      // Insertar fila en la tabla
      var row = table.insertRow();
      row.insertCell().appendChild(document.createTextNode(i + 1));
      row.insertCell().appendChild(document.createTextNode(x));
      row.insertCell().appendChild(document.createTextNode(xVal));
      row.insertCell().appendChild(document.createTextNode(rVal));
      x = numero;
      row.style.border = "1px solid white";


      // Verificar si r ya ha sido generado antes
      if (rValues.includes(r)) {
        var index = rValues.indexOf(r);
        alert("Se ha encontrado una repetición de r en la posición " + index + ". El valor de r repetido es " + r + ".");
        break;
      } else {
        rValues.push(r);
      }
    }

    // Agregar tabla al documento
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    resultado.appendChild(table);
  } else {
    alert("Los valores ingresados para los parámetros no cumplen las condiciones necesarias para alcanzar el período máximo.");
  }
}
function limpiar() {
  document.getElementById("semillas").value = "";
  document.getElementById("k").value = "";
  document.getElementById("g").value = "";
  document.getElementById("cantidad").value = "";
  document.getElementById("resultado").innerHTML = "";
}