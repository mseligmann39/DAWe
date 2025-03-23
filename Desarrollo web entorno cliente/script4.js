const boton2 = document.getElementById("act4");

boton2.addEventListener("click", function(){

    let x = 1;
    producto = 1;
    while (x!=0) {
        x = prompt("Ingrese un numero: ")
        if (x!=0) {
            
        
        producto *= parseInt(x)
    }}
    alert("El producto es: " + producto)
})