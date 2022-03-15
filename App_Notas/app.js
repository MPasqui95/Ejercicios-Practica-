const funcionesDeTareas = require ("./funcionesDeTareas")
let comando = process.argv[2];

switch (comando){
    case "listar":
        funcionesDeTareas.listar ()
        break;
    case "pendientes":
        funcionesDeTareas.leerPorEstado ("Pendiente")
        break;
    case "enProgreso":
        funcionesDeTareas.leerPorEstado ("En Progreso")
        break;
    case "terminadas":
        funcionesDeTareas.leerPorEstado ("Terminada")
        break;
    case "crear":
        let titulo = process.argv[3]
        funcionesDeTareas.agregarTarea (titulo)
        break;

    case undefined:
        console.log ("Atención - Tienes que pasar una acción.")
         break;
    default: 
        console.log("No entiendo que quieres hacer");
        break;
}
