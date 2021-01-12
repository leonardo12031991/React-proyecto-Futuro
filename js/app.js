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
    // elimina articulos del carrito

carrito.addEventListener('click',eliminarArticulo);



}
function agregarArticulo(e) {
    //preventDefault evita el salto cuando el enlace esta vacio
    e.preventDefault();

   if (e.target.classList.contains('agregar-carrito')) {
       const articuloSeleccionado = e.target.parentElement.parentElement;
       leerDatos(articuloSeleccionado);
       
   }
    
}
//Elimina articulos 

function eliminarArticulo(e) {
    if (e.target.classList.contains('borrar-articulo')) {
        const articuloId= e.target.getAttribute('data-id');
        articuloCarrito = articuloCarrito.filter(articulo => articulo.Id !== articuloId);
        carritoHTML(); // para recuperar HTML
        console.log('desde lugar correcto');
    }
}

//lee el contenido del HTML al que le damos click y extrae información
function leerDatos(articulo) {
   console.log(articulo)

//crear un objeto con el contenido del articulo
const infoArticulo = {
    imagen: articulo.querySelector('img').src,
    titulo:articulo.querySelector('h4').textContent,
    precio:articulo.querySelector('.precio span').textContent,
    id: articulo.querySelector('a').getAttribute('data-id'),
    cantidad:1
    
  }
//verificar si un elemento ya exixte en el carrito y actualisa cantidades
const existe= articuloCarrito.some(articulo => articulo.id === infoArticulo.id) ;
if (existe) {
    //si existe actualizamos la cantidad 

   const articulos = articuloCarrito.map(articulo => {
       if (articulo.id === infoArticulo.id) {
           articulo.cantidad ++;
           return articulo;
       }else{
           return articulo;
       }
   });
   articuloCarrito = [...articulos];

} else {
    //si no existe agregamos articulo
    //Agrega elementos al arreglo del carrito
  articuloCarrito=[...articuloCarrito, infoArticulo];
}
  
  //console.log(articuloCarrito);
  carritoHTML();
}

//Muestra los articulos del carrito en el HTML
function carritoHTML() {
    //limpiar el HTML
    limpiarHTML();


    //Recorre el carrito y genera el html
 articuloCarrito.forEach(articulo =>{
     const {imagen,titulo,precio,cantidad,id}= articulo;
     const row= document.createElement('tr');
     row.innerHTML=`
   
     <td>
     <img src="${imagen}"width="100" >
     </td>
     <td>${titulo} </td>
     <td>${precio} </td>
     <td>${cantidad} </td> 
     <td>
     <a href="#" class= "borrar-curso" data-id="${id}"> X </a>
     </td>              
     `;
     //agrega el HTML de el carrito al tbody
     contenedorCarrito.appendChild(row)
 })
}
// Elimina los articulos de el tbody

function limpiarHTML(){
    //forma lenta 
    //contenedorCarrito.innerHTML= '';
    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild); 
            
    
    }
} 

 