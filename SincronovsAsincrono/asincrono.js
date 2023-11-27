// Lectura de Archivo (Asíncrono vs Síncrono)
const fs = require('fs');

// Operación asíncrona
fs.readFile('archivo.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
    } else {
        console.log('Contenido del archivo (asíncrono):', data);
    }
});

console.log('Leyendo archivo (asíncrono)...');