const boton9 = document.getElementById("act9");

boton9.addEventListener("click", function(){
    
    let numero = parseInt(Math.random() * 100) + 1 

    
    let intento = prompt("Advine el numero")

    intento = parseInt(intento)

    let pista = "";
    let cerca = "";
    do {
        
        intento = prompt( pista + cerca + " Intente de nuevo")

        if (intento > numero) {
            pista = "El numero es menor"
        }
        if (intento < numero) {
            pista = "El numero es mayor"
        }
        if (Math.abs(intento - numero) <= 5) {
            cerca = " estás cerca..."
        }

        if (Math.abs(intento - numero) >= 20) {
            cerca = " estás lejos..."
        }
        else{
            cerca = ""
        }

    } while (intento!=numero);


    alert("Correcto! El numero era: " + numero)
})