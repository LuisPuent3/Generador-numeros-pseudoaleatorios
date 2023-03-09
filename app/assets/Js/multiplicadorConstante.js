var semilla=0,constante=0,n=0;

var tb=document.getElementById('table');

var in1=document.getElementById('semilla');

var in2= document.getElementById('constante');

var in3= document.getElementById('n'); 

function NewSemilla(semilla,mult){

    var tam=mult.toString().length;
    var dif=0;
    var aux="";

    if (tam>semilla.toString().length){
                
        if (tam%2!=0&&semilla.toString().length%2==0){// el tamano no es par y la semilla es par
            //1212 1212 1212
            aux="0"+mult.toString();
            tam=aux.length;
            dif=tam-semilla.toString().length;
            dif=parseInt(dif/2);
            aux=aux.substr(dif,semilla.toString().length);
            //console.log(aux);
            return aux;

        }else if (tam%2!=0&&semilla.toString().length%2!=0){// el tamano no es par y la semilla no es par
            //123 123 122

            aux=mult.toString();
            tam=aux.length;
            dif=tam-semilla.toString().length;
            dif=parseInt(dif/2);
            aux=aux.substr(dif,semilla.toString().length);
            // console.log(aux);
            return aux;

        }else if (tam%2==0&&semilla.toString().length%2==0){// el tamano es par y la semilla es par
            //123 1231 221

            aux=mult.toString();
            tam=aux.length;
            dif=tam-semilla.toString().length;
            dif=parseInt(dif/2);
            aux=aux.substr(dif,semilla.toString().length);
            //console.log(aux);
            return aux;
        }else if (tam%2==0&&semilla.toString().length%2!=0){// el tamano es par y la semilla no es par
            //123 123 1220

            aux="0"+mult.toString();
            tam=aux.length;
            dif=tam-semilla.toString().length;
            dif=parseInt(dif/2);
            aux=aux.substr(dif,semilla.toString().length);
            //console.log(aux);
            return aux;
        }
        else {
            console.log('ya no entra');
            return semilla;
        } 
    }else 
        return mult;


}

function Evaluate(){
    
    let rn=parseInt(tb.rows.length)-1;
    while(rn>=0){
        document.getElementById("table").deleteRow(rn); 
        rn--;
    }
    
    
    aux=in1.value;
    semilla=parseInt(aux);
    aux=in2.value;
    constante=parseInt(aux);
    aux=in3.value;
    n=parseInt(aux);

    if(!isNaN(semilla)&&!isNaN(constante)&&!isNaN(n)){

        var array= new Array(n);
        for (var i = 0; i < n; i++)
            array[i] = new Array(4);

        
        array[0][0]=0;
        array[0][1]=parseInt(semilla)*constante;
        array[0][2]=constante;
        array[0][3]=semilla;
        array[0][4]='0.'+NewSemilla(semilla,parseInt(semilla)*constante);
        semilla=NewSemilla(semilla,parseInt(semilla)*constante);
        //console.log(array[0][4]);
        

        for(var i=1;i<n;i++){

            array[i][0]=i;
            array[i][1]=parseInt(semilla)*constante; 
            array[i][2]=constante;
            array[i][3]=semilla;
            array[i][4]='0.'+NewSemilla(semilla,parseInt(semilla)*constante);
            semilla=NewSemilla(semilla,parseInt(semilla)*constante);
            //console.log(array[i][4]);
            
            
        }
        
        tb.className = "table table-dark"
        //creando la tabla para mostrar los datos//
        //var table = document.createElement('table');
        
        var thead = document.createElement('thead'); 
        var tr = document.createElement('tr'); 

        var i = document.createElement('th');
        var yi = document.createElement('th');
        var a = document.createElement('th');
        var xi= document.createElement('th');
        var ri= document.createElement('th');

        var text1 = document.createTextNode("i");
        var text2 = document.createTextNode("yi");
        var text3 = document.createTextNode("a");
        var text4 = document.createTextNode("Xi");
        var text5 = document.createTextNode("R");

        i.appendChild(text1);
        yi.appendChild(text2);
        a.appendChild(text3);
        xi.appendChild(text4);
        ri.appendChild(text5);
         
        tr.appendChild(i);
        tr.appendChild(yi);
        tr.appendChild(a);
        tr.appendChild(xi);
        tr.appendChild(ri);
        
        thead.appendChild(tr);
        tb.appendChild(thead);
        
        var tbody = document.createElement('tbody');
        for (var i = 0; i < n; i++){
            tr = document.createElement('tr');   

            var td1 = document.createElement('td');
            var td2 = document.createElement('td');
            var td3 = document.createElement('td');
            var td4 = document.createElement('td');
            var td5 = document.createElement('td');
            

            text1 = document.createTextNode(array[i][0]);
            text2 = document.createTextNode(array[i][1]);
            text3 = document.createTextNode(array[i][2]);
            text4 = document.createTextNode(array[i][3]);
            text5 = document.createTextNode(array[i][4]);

            td1.appendChild(text1);
            td2.appendChild(text2);
            td3.appendChild(text3);
            td4.appendChild(text4);
            td5.appendChild(text5);
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);

            tbody.appendChild(tr);
        }
        tb.appendChild(tbody);
    }else 
        alert('Hay algo mal con las entradas de datos');

          
}

function clean() {
    // Limpiar campos de entrada
    document.getElementById("semilla").value = "";
    document.getElementById("constante").value = "";
    document.getElementById("n").value = "";
    
    // Limpiar tabla de resultados
    var table = document.getElementById("table");
    table.innerHTML = "";
    }