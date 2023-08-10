/////////////////////////// Ejercicio número secreto ///////////////////////////////////////////

const numeroSecreto = 7;

for (let intentos=0; intentos<3; intentos++){
    let numeroUsuario = Number(prompt('Que numero tiras?'));
    console.log("realizaste " + intentos);
  if (numeroUsuario == numeroSecreto) {
    console.log(`Epa!, le pegaste pa`);
    break;
  } else {
    console.log("Intenta de vuelta");
    }
}