// Gulp local (devuelve un objeto 'gulp' con todos sus métodos)
var gulp = require('gulp');

// Plugins de Gulp (devuelven funciones encadenables con .pipe())
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var cleanCss = require('gulp-clean-css');

// Otros módulos de npm (no encadenables con .pipe(), pueden devolver funciones o cualquier otra cosa)
var browserSync = require('browser-sync');

// Tarea que manipula los scripts de Javascript
gulp.task('script', function () {
  gulp.src('src/js/*.js')           // Leo todos los archivos .js del directorio fuente
    .pipe(concat('app.js'))         // Los junto todos en uno solo
    .pipe(uglify())                 // Minifico el archivo resultante
    .pipe(rename('app.min.js'))     // Le cambio el nombre
    .pipe(gulp.dest('dist/js'));    // Lo escribo en el directorio destino
});

// Tarea que manipula las hojas de estilos
gulp.task('style', function () {
  gulp.src('src/css/app.scss')      // Leo el archivo principal, el que contiene los includes
    .pipe(sass())                   // Compilo el resultado a CSS, obteniendo ya un sólo archivo
    .pipe(cleanCss())               // Minifico el fichero resultante
    .pipe(rename('app.min.css'))    // Le cambio el nombre
    .pipe(gulp.dest('dist/css'));   // Lo escribo en el directorio destino
});

// Tarea que ejecuta las dos anteriores de forma secuencial, se ejecuta al invocar 'gulp' sin argumentos
gulp.task('default', ['script', 'style']);

// Tarea que observa cambios en 'src'
// En su primera ejecución lanzará también las dos tareas previas y el autoreload
gulp.task('observe', ['script', 'style', 'autoreload'], function () {
  gulp.watch('src/css/*.scss', ['style']);  // Lanza la tarea 'style' cuando observa cambios en cualquer scss
  gulp.watch('src/js/*.js', ['script']);    // Lanza la tarea 'script' cuando observa cambios en cualquier js
});

// Tarea que observa cambios en 'dist' generados desde la tarea anterior
// Recarga automáticamente el navegador
gulp.task('autoreload', function () {
  // Abre un servidor HTTP en localhost cuya raíz será nuestro directorio de tabajo
  // Esto es ecesario para hacer la recarga automática mediante websockets
  browserSync.init(['dist/css/**.css', 'dist/js/**.js', 'index.html'], {
    server: './'
  });
});
