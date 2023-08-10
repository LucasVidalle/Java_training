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