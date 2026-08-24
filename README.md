TRABAJO PRÁCTICO N°1

El primer programa que es el index.js construye una ficha de un videojuego llamado Dragon Ball FighterZ donde puede o no recibir el nombre de un estudiante junto con la versión de Node.js que tiene y la plataforma utilizada. Esto también incluye la información del juego.

El segundo programa que es el orden-event-loop.js muestra el orden en que se ejecutan los diferentes console.log en el caso de que uno o varios utilicen setTimeout.

Los programas se ejecutan de esta manera:

index.js: node index.js Emiliano o node index.js

orden-event-loop.js: node orden-event-loop.js

La carpeta salida se genera en index.js justo en la constante carpetaSalida y el archivo ficha-videojuego.txt en la constante rutaArchivo.

¿Qué diferencia existe entre JavaScript, V8 y el runtime de Node.js?

JavaScript es un lenguaje de programación.

El motor V8 interpreta y ejecuta JavaScript.

Node.js es el entorno para ejecutar JavaScript sin necesidad del navegador.

¿Por qué el callback de setTimeout(..., 0) se ejecuta después del código principal?

Porque el 0 no significa que se tiene que ejecutar de manera inmediata, sino que tiene que esperar a que termine el código principal y esperar a que el hilo vuelva a estar disponible.

¿Cuál es la diferencia general entre I/O bloqueante y no bloqueante?

Bloqueante: el programa espera a que termine la operación antes de continuar.

No bloqueante: el programa sigue ejecutando otras instrucciones y la operación se resuelve en segundo plano.

¿Qué responsabilidades cumplen node:path y node:fs en index.js?

node:path: construye rutas de archivos y carpetas de forma segura y compatible con el sistema operativo.

node:fs: permite interactuar con el sistema de archivos: crear, leer, escribir y modificar archivos.


