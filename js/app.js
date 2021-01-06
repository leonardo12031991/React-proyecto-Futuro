//variables 
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');

cargarEventosListeners();

//Funcion agregar articulos al carrito

function cargarEventosListeners() {
    
    listaCursos.addEventListener('click', agregarArticulo);
};
function agregarArticulo(e) {
    //preventDefault evita el salto cuando el enlace esta vacio
    e.preventDefault();

   if (e.target.classList.contains('agregar-carrito')) {
       const articuloSeleccionado = e.target.parentElement.parentElement;
       leerDatos(articuloSeleccionado);
       
   }
    
}
//lee el contenido del HTML al que le damos click y extre información
function leerDatos(articulo) {
    //console.log(articulo);

//crear un objeto con el contenido del articulo
const infoArticulo = {
    imagen: articulo.querySelector('img').src
    
  }
  console.log(infoArticulo);
}