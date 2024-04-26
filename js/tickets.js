function calcular() {
    var categoria = parseInt(document.getElementById("categoria").value);
    var numero1 = parseInt(document.getElementById('cantidad').value);
    var numero2 = 200;
    var multi = numero1 * numero2

    if (isNaN(numero1)) {
        alert("Por favor ingrese una cantidad.");
        return;
    }

    switch (categoria) {
        case 1:
            resultadofinal = multi - (multi * (80 / 100))
            break;
        case 2:
            resultadofinal = multi - (multi * (50 / 100))
            break;
        case 3:
            resultadofinal = multi - (multi * (15 / 100))
            break;
    }

    if (numero1!== null) {
        document.getElementById('result').value = "Total a Pagar: $" + (resultadofinal);
    }
}

function borrar(){
    document.getElementById('result').value= "Total a Pagar: $"
}   