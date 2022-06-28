import fetch from "node-fetch";
async function pegaDados() {
    // Async e Await tem que rolar se tiver fetch dentro da função!
    const resultado = await fetch('https://api.github.com/users/joaovitoroliv')
    // Resultado.json é promise também
    const resultadoConvertido = await resultado.json();
    console.log('forma completa: ' , resultadoConvertido)
}

// Forma simplificada
async function pegaDadosSimplificado() {
    const resultadoConvertido = await fetch('https://api.github.com/users/joaovitoroliv').then((res) => res.json())
    console.log('simplificado: ' , resultadoConvertido);
}
pegaDados();
pegaDadosSimplificado();