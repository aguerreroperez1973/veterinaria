const fs = require('fs')

    const registrar = (nuevo_registro) => {
        const updateCitas = JSON.parse(fs.readFileSync("./citas.json", 'utf8'));
        //const updateCitas = fs.readFileSync("./citas.json", 'utf8');
        updateCitas.push(nuevo_registro); 
        fs.writeFileSync('citas.json', JSON.stringify(updateCitas))
        console.log('Paciente ingresado con exito!')
    }

    const leer = (nameFile) => {
        const contend = fs.readFileSync(nameFile,'utf-8')
        console.log(contend)
    }
    
module.exports = { registrar, leer }