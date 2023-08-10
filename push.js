////////////////// ejercio pushear elementos a una array ///////////////////////////

let producto1 = {
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

console.log(productos)