const funcionesDeTareas = require ("./funcionesDeTareas")

let comando = process.argv [2];

switch (comando){
    case "listar": 
        funcionesDeTareas.listar()
         break;
    case undefined:
        console.log ("Atención - Tienes que pasar una acción.")
        break;
    case "crear":
        let titulo = process.argv[3];
        funcionesDeTareas.guardarTarea(titulo)
        break;
    case "filtrar":
        let estado = process.argv[3];
        funcionesDeTareas.leerPorEstado(estado)
        break;
    default:
        console.log("No entiendo qué quieres hacer.");
}