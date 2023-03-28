function generar() {
    const semillas = document.getElementById("semillas").value.split(",");
    const modulo = parseInt(document.getElementById("modulo").value);
    const cantidad = parseInt(document.getElementById("cantidad").value);
    
    const xn = semillas.map(Number);
    const resultados = [];
    const razones = [];
    const rSet = new Set();
    
    for (let i = 0; i < cantidad; i++) {
      const suma = xn[0] + xn[xn.length - 1];

      const xn1 = suma % modulo;
      const rString = (xn1 / (modulo - 1)).toString();
      const r = rString.slice(0, rString.indexOf(".") + 5);
      resultados.push(xn1);
      razones.push(r);
      
      if (rSet.has(r)) {
        alert(`El valor de r=${r} se ha repetido, el ciclo se detendrá.`);
        break;
      }
      
      rSet.add(r);
      //xn.shift();
      //xn.push(xn1);
    
      const fila = document.createElement("tr");
      fila.innerHTML = `
        <td>X${i + semillas.length + 1}</td>
        <td>= (X${i} + X${i + semillas.length}) mod ${modulo}</td>
        <td>= (${xn[0]} + ${xn[xn.length - 1]}) mod ${modulo}</td>
        <td>= ${xn1}</td>
        <td>r${i+1} = ${xn1}/${modulo-1} = ${r}</td>
      `;
      document.getElementById("procedimiento").appendChild(fila);
      xn.shift();
      xn.push(xn1);
    }
    
    document.getElementById("resultado").innerHTML = `
      <p>Números generados: ${resultados.join(", ")}</p>
      <p>Razones: ${razones.join(", ")}</p>
    `;
  }

  function limpiar() {
    document.getElementById("semillas").value = "65,89,98,03,69";
    document.getElementById("modulo").value = "";
    document.getElementById("cantidad").value = "";
    document.getElementById("procedimiento").innerHTML = "<thead><tr><th>Xn</th><th>Fórmula</th><th>Operación</th><th>Xn+1</th><th>Razón</th></tr></thead><tbody></tbody>";
    document.getElementById("resultado").innerHTML = "";
  }
  
  