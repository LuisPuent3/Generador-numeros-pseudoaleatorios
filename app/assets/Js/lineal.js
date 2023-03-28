function generar() {
	var semilla = parseInt(document.getElementById("semillas").value);
	var constante = parseInt(document.getElementById("constantes").value);
	var incremento = parseInt(document.getElementById("incrementos").value);
	var modulo = parseInt(document.getElementById("modulos").value);
	var cantidad = parseInt(document.getElementById("cantidad").value);

	var numeros = [];
	var x = semilla;
	var rs = []; // arreglo para llevar un registro de los valores de r generados

	// Crear tabla
	var table = document.createElement("table");
	var headerRow = table.insertRow();
	headerRow.insertCell().appendChild(document.createTextNode("i"));
	headerRow.insertCell().appendChild(document.createTextNode("X[i]"));
	headerRow.insertCell().appendChild(document.createTextNode("número generado"));
	headerRow.insertCell().appendChild(document.createTextNode("r"));

	for (var i = 0; i < cantidad; i++) {
		var numero = (constante * x + incremento) % modulo;
		var r = (numero / (modulo - 1)).toFixed(8);
		r = r.slice(0, 6);
		numeros.push(numero);

		// Insertar fila en la tabla
		var row = table.insertRow();
		row.insertCell().appendChild(document.createTextNode("X" + i));
		row.insertCell().appendChild(document.createTextNode("= " + x));
		row.insertCell().appendChild(document.createTextNode(", =(" + constante + "*" + x + " + " + incremento + ") mod " + modulo + " = " + numero));
		row.insertCell().appendChild(document.createTextNode(", r" + i + " = " + r));

		// Verificar si r se ha repetido antes
		if (rs.includes(r)) {
			alert("r repetido: " + r);
			break; // salir del ciclo for
		} else {
			rs.push(r);
		}

		x = numero;

	}

	// Mostrar tabla
	var resultado = document.getElementById("resultado");
	resultado.innerHTML = "";
	resultado.appendChild(table);
}
function limpiar() {
	// Obtener los elementos de entrada
	var semilla = document.getElementById("semillas");
	var constante = document.getElementById("constantes");
	var incremento = document.getElementById("incrementos");
	var modulo = document.getElementById("modulos");
	var cantidad = document.getElementById("cantidad");
  
	// Borrar los valores ingresados
	semilla.value = "";
	constante.value = "";
	incremento.value = "";
	modulo.value = "";
	cantidad.value = "";
  
	// Borrar los resultados de la tabla
	var resultado = document.getElementById("resultado");
	resultado.innerHTML = "";
  }
  