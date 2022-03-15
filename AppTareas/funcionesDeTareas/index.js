const fs = require ("fs");
const pathArchivosDeTareas = __dirname + "/../tareas.json"
const archivosDeTareas = fs.readFileSync(pathArchivosDeTareas, "utf-8");
const tareas = JSON.parse (archivosDeTareas);

function listar (){
    imprimirTareas("============ Listado de Tareas ============", tareas )
}

function imprimirTareas (titulo, array){
    console.log (titulo);
    array.forEach(function (valor, indice){
        console.log ((indice + 1) + "* Tarea: " + valor.titulo + " - Estado: " + valor.estado)
        
    });
}

function guardarTarea(titulo){
    
    let nuevaTarea = {
        titulo : titulo,
        estado : "Pendiente"
    }
    tareas.push (nuevaTarea)

    let JsonDeTareas = JSON.stringify(tareas);
    fs.writeFileSync(pathArchivosDeTareas, JsonDeTareas);
}

function filtrar (titulo, funcionDeFiltrado){
    let tareasFiltradas = tareas.filter (funcionDeFiltrado)
        
        imprimirTareas (titulo, tareasFiltradas)
    }

    function leerPorEstado(estado){
        switch (estado){
            case "Pendiente" :
                filtrar ("==== Listado de Notas Pendientes ====", (valor) => valor.estado === "Pendiente");
                break;
            case "En Progreso" :
                filtrar ("==== Listado de Notas En Progreso ====", (valor) => valor.estado === "En Progreso");
                break;
            case "Terminado" :
                    filtrar ("==== Listado de Notas Terminadas ====", (valor) => valor.estado === "Terminado");
                    break;
        }
    }
    

    


module.exports = {imprimirTareas, listar, guardarTarea, leerPorEstado};