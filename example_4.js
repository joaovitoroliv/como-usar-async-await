function testeSimples(){ return 'da um like ai'; }
console.log(testeSimples());
async function testeSimplesAsync(){ return 'da um like ai'; }
console.log(testeSimplesAsync());
testeSimplesAsync().then((resposta) => console.log(resposta))