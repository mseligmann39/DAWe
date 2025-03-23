const boton11 = document.getElementById("act11");

boton11.addEventListener("click", function(){
    
   let n = prompt("Ingrese numero.")

   n = parseInt(n)
    
   final = "";

   for (let index = 0; index <= n; index++) {
    
    console.log(index + ",")

    final += (index + ",");

    
   }
   alert(final)
})