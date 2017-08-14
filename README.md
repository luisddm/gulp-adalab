# Ejemplo de iniciación a Gulp para Adalab

Podéis ver la presentación que utilicé en el taller [aquí](keynotes/gulp.pdf), en formato PDF.

## Ejecución

Para usar este ejemplo hay que seguir los siguientes pasos:
- Instalar Node y npm desde su [web oficial](https://nodejs.org/en/) (Windows, MacOS). También se puede hacer mediante consola ejecutando `apt-get install nodejs` (en Ubuntu o Debian) o usando [Homebrew](https://brew.sh/) (en MacOS).

- Instalar todas las dependencias de npm listadas en *package.json* ejecutando `npm install`.

- Instalar Gulp también de forma global ejecutando `npm -g install gulp` (puede requerir permisos de superusuario, en cuyo caso es necesario poner `sudo` delante). De este modo se podrá usar como comando de sistema. A partir de npm v5.2.0 también es posible [ejecutar `gulp` de forma local](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) (el que aparece en *package.json*) usando `npx gulp` seguido de las opciones descritas a continuación. Vale para cualquier otro paquete que se ejecute mediante comando y que queramos ejecutar en nuestro proyecto local sin tener que instarlarlo de forma global.

- Para ejecutar las tareas que manipulan los scripts y las hojas de estilos una sóla vez, hay que ejecutar `gulp` sin argumentos (véase la tarea 'default').

- Para mantener un servidor HTTP local abierto que fuerce una recarga del navegador cada vez que haya cambios, hay que ejecutar `gulp observe`. Esto observará los cambios que se produzcan en los archivos de *src*, forzando una compilación a *dist*. A su vez, la observación de cambios en *dist* forzará una recarga del navegador.

## Notas

- Se pueden instalar plugins adicionales mediante `npm install nombre-del-plugin` y cargarlos en *gulpfile.js*. Podéis encontrar muchos [aquí](https://gulpjs.com/plugins/). A partir de la versión 5 de npm (Node 8.x) se añadirán automáticamente al *package.json* (para versiones previas usar `npm install --save nombre-del-plugin`). Como los plugins de Gulp no dejan de ser módulos de npm, también podéis buscar [aquí](https://www.npmjs.com/).

- El archivo *.gitignore* evita que tanto *node_modules* como *dist* sean versionados por Git. El motivo es que, como norma general, únicamente debemos subir a nuestro repo el código que hemos hecho nosotros, no el que ha hecho otra gente (ya está en sus respectivos repos y lo traemos mediante `npm install`) ni el que se genera automáticamente (ya lo generamos mediante `gulp`).

- Algunas de vosotras teníais problemas al intentar ver el directorio *node_modules* desde Atom. No he encontrado ninguna info al respecto, pero podéis probar a actualizar vuestros editores a la última versión, por si fuese algún bug, o también probar algún editor alternativo ([VSCode](https://code.visualstudio.com/), [Sublime](http://www.sublimetext.com/)) para descartar otros problemas.

- Hay algunos flujos de trabajo que van cambiando con el tiempo, ya que algunos se irán volviendo innecesarios y otros nuevos les reemplazarán. Es el caso, por ejemplo, de la concatenación de archivos, que es muy positiva en HTTP 1.1, pero innecesaria, e incluso contraproducente, en HTTP 2. Ocurre lo mismo con los *sprites* o concatenación de imágenes. Para saber más sobre el funcionamiento de HTTP y su influencia en el desarrollo web, recomiendo leer los capítulos dedicados a HTTP del libro [High Performance Browser Networking](http://chimera.labs.oreilly.com/books/1230000000545/index.html) de Ilya Grigorik, o echar un ojo a otra de mis presentaciones que resume el tema [aquí](keynotes/http2.pdf).

## Referencias

- [Gulp for Beginners](https://css-tricks.com/gulp-for-beginners/) (CSS-Tricks).
- [Diagramas de fujo de HTTP 1.1 y HTTP 2](https://twitter.com/kosamari/status/859958929484337152).

## Tiras cómicas :)

- [Nodecalypse](https://webangelist.ladybenko.net/nodecalypse/), de Belén Albeza, al hilo de lo que ocurrió en el [npmgate](http://www.businessinsider.com/npm-left-pad-controversy-explained-2016-3).
- [NPM Delivery](http://www.monkeyuser.com/2017/npm-delivery/), de MonkeyUser.
- [Sandwich](https://www.xkcd.com/149/), de xkcd.
