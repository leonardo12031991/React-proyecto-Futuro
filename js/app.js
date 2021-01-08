//variables 
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articuloCarrito = [];

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
    console.log(articulo);

//crear un objeto con el contenido del articulo
const infoArticulo = {
    imagen: articulo.querySelector('img').src,
    titulo:articulo.querySelector('h4').textContent,
    precio:articulo.querySelector('.precio span').textContent,
    id: articulo.querySelector('a').getAttribute('data-id'),
    cantidad:1
    
  }
  //Agrega elementos al arreglo del carrito
  articuloCarrito=[...articuloCarrito, infoArticulo];
  //console.log(articuloCarrito);
  carritoHTML();
}

//Muestra los articulos del carrito en el HTML
function carritoHTML() {
    //limpiar el HTML


    
    //Recorre el carrito y genera el html
 articuloCarrito.forEach(articulo =>{
     const row= document.createElement('tr');
     row.innerHTML=`
     <td>
        ${articulo.titulo}

     </td>         
     `;
     //agrega el HTML de el carrito al tbody
     contenedorCarrito.appendChild(row)
 })
}
