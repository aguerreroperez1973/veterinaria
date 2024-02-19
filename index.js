const {registrar, leer} = require('./operaciones');

const argumentos = process.argv.slice(2)
const operacion = argumentos[0];
/*const contenidoNewFile = [
    { nombre: argumentos[1] },
    { edad: argumentos[2] },
    { animal: argumentos[3]},
    { color: argumentos[4] },
    { enfermedad: argumentos[5] }
    ]*/
    const contenidoNewFile = 
    { nombre: argumentos[1],
      edad: argumentos[2],
      animal: argumentos[3],
      color: argumentos[4],
      enfermedad: argumentos[5] }

if (operacion === 'registrar') {
    //registrar('citas.json', JSON.stringify(contenidoNewFile));}
    registrar(contenidoNewFile);}
else {leer('citas.json');}


