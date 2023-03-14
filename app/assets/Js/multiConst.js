function calcular(){
    let semillaInput = document.getElementById("semilla").valueAsNumber;
    let X=[];
    X.push(semillaInput); //X0
  
    let A = document.getElementById("constante").valueAsNumber;
    let veces = document.getElementById("n").valueAsNumber;
  
    tabla.innerHTML ="";
  
    for(let i=0; i<veces; i++)
    {
      let AX = A * X[i]; 
      let xi1 = Number(String(AX).padStart(8,"0").substring(2,6)); //Xi+1
  
      // Verificar si xi1 ya ha aparecido antes en X
      if (X.indexOf(xi1) !== -1) {
        alert(`El valor ${xi1} se ha repetido, se detiene el ciclo`);
        break;
      }
  
      X.push(xi1);
  
      let r = xi1/10000;
  
      tabla.innerHTML +=`<tr>
        <td>${i}</td>
        <td>${AX}</td>
        <td>${A}</td>
        <td>${X[i]}</td>
        <td>${r}</td>
      </tr>`;
    }
  
  }
  
  function limpiar() {
    document.getElementById("semilla").value = "";
    document.getElementById("constante").value = "";
    document.getElementById("n").value = "";
    document.getElementById("tabla").innerHTML = "";
  }
  
  