const fs = require ('fs');
const pathArchivoTares = __dirname + "/../tareas.json";
let tarea = fs.readFileSync (pathArchivoTares, "utf8");
let datosConvertidos = JSON.parse (tarea);

//Funciones Exportadas

function listar(){
   
  imprimirArrayDeTareas("==== Listado de Notas ====", datosConvertidos);
}

function leerPorEstado (estado){
    switch (estado){
        case "Pendiente" :
            filtrar ("==== Listado de Notas Pendientes ====", (dato) => dato.estado === "Pendiente");
            break;
        case "En Progreso" :
            filtrar ("==== Listado de Notas En Progreso ====", (dato) => dato.estado === "En Progreso");
            break;
        case "Terminada" :
                filtrar ("==== Listado de Notas Terminada ====", (dato) => dato.estado === "Terminada");
                break;
    }
}

function agregarTarea(titulo){
    
    let nuevaTarea = {
        titulo : titulo,
        estado : "Pendiente"
    }
    datosConvertidos.push (nuevaTarea)

    let JsonDeTareas = JSON.stringify(datosConvertidos);
    fs.writeFileSync(pathArchivoTares, JsonDeTareas);
}

//Funciones auxiliares

function filtrar(titulo, funcionDeFiltrado){
  
    // let tareasPendientes = datosConvertidos.filter((dato) => dato.estado === "Pendiente")
     let tareasFiltradas = datosConvertidos.filter (funcionDeFiltrado)
     
         imprimirArrayDeTareas(titulo, tareasFiltradas);
         
     }
     
 function imprimirArrayDeTareas(titulo, array){
     console.log(titulo);

     array.forEach(dato => {
        console.log (" * Titulo: " + dato.titulo + " - " + "Estado: " + dato.estado);
         
     });
 
    //  for (let i = 0; i < array.length; i++){
    //      console.log ((i + 1) + " * Titulo: " + array[i].titulo + " - " + "Estado: " + array[i].estado);
    //  }
 }
module.exports = {listar, leerPorEstado, agregarTarea}
