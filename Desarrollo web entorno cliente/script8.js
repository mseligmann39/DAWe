const boton8 = document.getElementById("act8");

boton8.addEventListener("click", function(){
    
    nombre = "1234"

    do {
        intento = prompt("Ingrese nombre")
        
    } while (intento != nombre);

    alert("Bingo")
})