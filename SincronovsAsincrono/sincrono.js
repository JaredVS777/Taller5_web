//Lectura de Archivo (Asíncrono vs Síncrono)
const fs = require('fs');

// Operación síncrona
try {
    const data = fs.readFileSync('archivo.txt', 'utf8');
    console.log('Contenido del archivo (síncrono):', data);
} catch (err) {
    console.error(err);
}

console.log('Leyendo archivo (síncrono)...');