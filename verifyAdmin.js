/////////////////// ejercicio de acceder a subir productos solo si sos admin ///////////////////////////

let productos = [];

function crearProducto(titulo, descripcion, precio, imagen){
  let producto = {
    titulo,
    descripcion,
    precio,
    imagen,
  };

return producto;
}

function subirProductos(producto, array){
  array.push(producto);
  return array;
}

let User = {
  nombre: "Mati",
  apellido: "Sosa",
  admin: true,
};

function login(usuario) {
  if (usuario.admin) {
    subirProductos(
      crearProducto("Brazuca", "del mundial 2014", 5000, "/imagen/brazuca/png"),
      productos
    );
    
    productos.push(
      crearProducto("Jabulani", "del mundial 2010", 4500, "/imagen/jabulani/png")
    );
  } 
    else{
    alert("ehh loco no sos admin ,tomatela");
  }
}

login(User);

console.log(productos);