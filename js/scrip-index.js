//Arreglo de Objetos
var trabajadores = [];
var jaja = [];

function imprimir(){
    console.log(trabajadores);
    let tblTrabajador = document.getElementById('tblTrabajador');
    tblTrabajador.innerHTML = '';
    trabajadores.forEach((x) =>{
        let tr = document.createElement('tr');
        let tdNum = document.createElement('td');
        let tdNom = document.createElement('td');
        let tdPues = document.createElement('td');
        let tdSuel = document.createElement('td');
        let tdDesc = document.createElement('td');
        let tdReci = document.createElement('td');
        //Asignar Valores a las columnas
        tdNum.innerText = trabajadores.indexOf(x)+1;
        tdNom.innerText = x.nombre;
        tdPues.innerText = x.puesto;
        tdSuel.innerText = x.sueldo;
        tdDesc.innerText = x.descuento.toFixed(2);
        tdReci.innerText = x.recibe.toFixed(2);
        //agrega las columnas a la fila
        tr.append(tdNum);
        tr.append(tdNom);
        tr.append(tdPues);
        tr.append(tdSuel);
        tr.append(tdDesc);
        tr.append(tdReci);
        tblTrabajador.append(tr);
    });

}

//Método agregar: 
function agregar(){
    //Lectura de valores en los Inputs
    let nom = document.getElementById('txtNombre').value; 
    let pues = document.getElementById('slPuesto').value; 
    let suel = parseFloat(document.getElementById('txtSueldo').value);
    let desc  = suel*0.0935;
    let reci = suel - desc;

    //Crear objeto con los valores
    let nuevoTrabajador = {
        "nombre" : nom,
        "puesto" : pues,
        "sueldo" : suel,
        "descuento" : desc,
        "recibe" : reci
    }
    trabajadores.push(nuevoTrabajador);

    imprimir();
    borrar();
}

function borrar(){
    document.getElementById('txtNombre').value = " Ingrese Nombre "; 
    document.getElementById('slPuesto').value = 0; 
    document.getElementById('txtSueldo').value = 0;
}
