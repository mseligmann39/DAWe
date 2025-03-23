// Actividad 3: Pide al usuario un numero n y usa un bucle while para sumar 
// todos los numeros pares desde el 2 hasta n, muestra el resultado al finalizar

const boton = document.getElementById("act3");

boton.addEventListener("click", function(){

let numero = prompt("Ingresa un numero:");

numero = parseInt(numero);
let i = 2;
suma = 0;
while (i<=numero) {

    suma +=i;

    i +=2;
}

alert("La suma de todos los pares hasta el numero introducido es: "+ suma );

})