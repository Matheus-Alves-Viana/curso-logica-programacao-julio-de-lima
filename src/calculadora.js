function somarDoisNumeros(valor1, valor2){
    const resultado = valor1 + valor2
    return resultado;
}

function calcularMediaDeDoisNumeros(valor1, valor2){
    const resultadoSomaDoisValores = somarDoisNumeros(valor1, valor2)
    const resultadoMediaDeDoisValores = resultadoSomaDoisValores/2;
    return resultadoMediaDeDoisValores;
}


module.exports = {
    somarDoisNumeros
}