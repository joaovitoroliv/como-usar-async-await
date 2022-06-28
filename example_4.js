import fetch from "node-fetch";
async function testeSimplesAsync(){
    const resultado = await fetch('https://api.github.com/users/joaovitoroliv')
    console.log(resultado);
}
console.log('antes do async')
testeSimplesAsync();
console.log('da um likeclear ai async')