const boton6 = document.getElementById("act6");

boton6.addEventListener("click", function(){
    
    let opcion = -1;

    while (opcion < 0 || opcion > 10 ) {
        opcion = prompt("Digite su calificación: ")
        opcion = parseInt(opcion)
    }

    let nota = "nulo";

    switch (opcion) {
        case 0:
        case 1:
            nota = "Que burro";
            break;
        
        case 2:
        case 3:
            nota = "Una mierda";
            break;
            case 3,4:
                nota = "Insuficiente";
            break;
        case 5:
        case 6:
                nota = "aprobado";
            break;

        case 7:
        case 8:
            nota = "Muy bien";
            break;
        case 9:
               nota = "Distinguido";
            break;
        case 10:
                nota = "Excelente";
                break;

        default:
            nota = "Nose"
            break;
    }

    alert(nota)
})