const boton5 = document.getElementById("act5");

boton5.addEventListener("click", function(){
    

    let numero1 = prompt("Ingrese primer numero: ");

    numero1 = parseInt(numero1);


    let numero2 = prompt("Ingrese segundo numero: ");

    numero2 = parseInt(numero2);

    let opcion = "Hola";


    //Diferentes que /*+-

    while ((opcion != "+") && (opcion != "-") && (opcion != "*") && ( opcion != "/")) {

        opcion = prompt("Elija entre + - * /")

    }

    // Operacion
    switch (opcion) {
        case "+":
            alert("Resultado: " + (numero1 + numero2))
            break;
        case "-":
            alert("Resultado: " + (numero1 - numero2))
            break;
        case "*":
            alert("Resultado: " + (numero1 * numero2))
            break;    
        default:
            alert("Resultado: " + (numero1 / numero2))
            break;
    }
})