import fetch from 'node-fetch'
async function pegaDados() {
    // Await sempre rola antes da Promise
    const resultado = await fetch('https://api.github.com/users/joaovitoroliv')
    console.log(resultado);
}
pegaDados();