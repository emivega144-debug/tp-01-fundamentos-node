const nombreDelEstudiante = process.argv[2] ?? "Estudiante no identificado";
console.log(`Hola, ${nombreDelEstudiante}`);


const nodeJs = process.version;
const plataforma = process.platform;

console.log("Versión de Node.js:", process.version);
console.log("Plataforma:", process.platform);

const fs = require("node:fs");
const path = require("node:path");

const dragonBallFighterZ = {

    titulo: "Dragon Ball FighterZ",
    estudio: "Arc System Works",
    año: "26 de enero del 2018",
    plataformas: "PlayStation 4, Xbox One",
    multijugador: true,

};

const plataformasTexto = dragonBallFighterZ.plataformas.join(",");

let multijugadorSiNo = dragonBallFighterZ.multijugador ? "Si" : "No"

let ficha = (

    `
    FICHA DEL VIDEOJUEGO

    Estudiante: ${nombreDelEstudiante},
    Node.js: ${nodeJs}
    Plataforma del sitema: ${plataforma}

    Titulo: ${dragonBallFighterZ.titulo}
    Estudio: ${dragonBallFighterZ.estudio}
    Año: ${dragonBallFighterZ.año}
    Plataformas: ${plataformasTexto}
    ¿Es multijugador?: ${multijugadorSiNo}

    `
)

const carpetaSalida = path.join(__dirname, "salida")
const rutaArchivo = path.join(carpetaSalida, "ficha-videojuego.txt")

fs.mkdirSync(carpetaSalida, { recursive: true });
fs.writeFileSync(rutaArchivo, ficha, "utf8");

console.log(ficha);
console.log(`Archivo generado en: ${rutaArchivo}`);

