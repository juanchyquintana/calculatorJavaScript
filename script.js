function numeros(valor){
    document.querySelector('#resultado').value += valor;
}

function operacion(){
    const opera = document.querySelector('#resultado').value;
    if( opera === 0){
        document.querySelector('#resultado').value = "Sin Resultado";
    } else {
        document.querySelector('#resultado').value = eval(opera);
    }

}

function resetear(){
    document.querySelector('#resultado').value = " ";
}