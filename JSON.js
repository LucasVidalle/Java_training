let productos = [];

function crearProducto(titulo, descripcion, precio){
  let producto = {
    titulo,
    descripcion,
    precio,
  };

return producto;
}

function subirProductos(producto, array){
  array.push(producto);
  return array;
}

productos.push(
    crearProducto("Taza", "Roja", 50),
    crearProducto("Vaso", "Verde", 60),
);

localStorage.setItem(`products`,productos);

const productosJSON = JSON.stringify(productos);

localStorage.setItem(`products`, productosJSON);