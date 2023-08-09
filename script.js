///////////////////////////////// ejercicio de crear productos con una lista ////////////////////////////////////

/*let envio = true
let envioGratis = false

function descuentoAplicado (precio, descuento) {
  cuentaDescuento = precio - (precio * descuento)/100
  return cuentaDescuento
}

function calcularCuotas (precio){
  cuentaCuotas = (precio/12)
  return cuentaCuotas
}

function crearProducto (producto, titulo, precio, descuento, imagen, descripcion)
{return `
  Producto: ${producto}
  Título: ${titulo}
  Precio: $${precio}
  Descuento: el descuento es de %${descuento}
  Precio con descuento: $${descuentoAplicado(precio,descuento)}
  Hasta 12 cuotas sin descuento: precio de cuota $${calcularCuotas(precio)} por mes
  Imagen: ${imagen}
  Descripción: ${descripcion}
  Envío: ${envio}
  Envío gratis: ${envioGratis}
  `
}
  
crearProducto(1, "Vans Knu Skool", 100000, 10, "Img.Vans/jpg", "Zapatillas urbanas, color negro y blanco, talle 44");

crearProducto(2, "Entrada Duki estadio Monumental", 79000, 15, "Img.Duki/jpg", "Platea baja");

crearProducto(3, "Termo Stanley", 45000, 5, "Img.Stanley/jpg", "Color verde, aprueba de fugas y mantiene bebidas calientes durante 40hs");

console.log(crearProducto);*/

////////////////// ejercio pushear elementos a una array ///////////////////////////

/*let producto1 = {
  nombre: "Call of Duty World War 2",
  precio: 4500
}

let producto2 = {
  nombre: "Grand thef auto 5",
  precio: 5000
}

let productos = []

productos.push(producto1, producto2)

producto1.imagen = "imagen/producto1.png"
producto1.peso = "55 GB"

producto2.imagen = "imagen/producto2.png"
producto2.peso = "88.64 GB"

console.log(productos)*/

/////////////////// ejercicio de acceder a subir productos solo si sos admin ///////////////////////////

/*let productos = [];

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

console.log(productos);*/

////////////////////////// ejercicio de intentos de inicio de sesión //////////////////////////////

const usuario = {
  nombre: "admin",
  contrasenia: "1234",
}

function login() {
      for (let intentos=1 ; intentos<=3; intentos++){
      const nombre = prompt("ingrese el nombre de usuario");
      const contrasenia = prompt("ingrese su contraseña");

      console.log(nombre);
      console.log(contrasenia);

      if (nombre == usuario.nombre && contrasenia == usuario.contrasenia) {
          console.log("logueado");
          return true;
      } 
      else{ console.log("Intento fallido, intente otra vez")

    }
  }
}; 

login();
