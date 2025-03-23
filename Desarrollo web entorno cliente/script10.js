let saldoActual = 1000;


const saldo = document.getElementById("saldo");

saldo.addEventListener("click", function(){

    alert("Su saldo es de " + saldoActual +  " Euros")

})

const depositar = document.getElementById("depositar");

depositar.addEventListener("click", function(){
    let deposito = prompt("Cantidad a depositar: ")
    deposito = parseInt(deposito)
    saldoActual +=deposito
})

const retirar = document.getElementById("retirar");

retirar.addEventListener("click", function(){

    let retirar = prompt("Cantidad a retirar: ")
    retirar = parseInt(retirar)
    saldoActual -= retirar;

})

const salir = document.getElementById("salir");

salir.addEventListener("click", function(){
    window.close()
})






