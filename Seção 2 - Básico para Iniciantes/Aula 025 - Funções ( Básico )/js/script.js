/*
function saudacao(nome) {
    return `Bom dia ${nome}!`;
}

const variavel = saudacao(prompt('Digite seu nome:Rodri'));
console.log(variavel);
*/

/*
function soma(x, y) {
    const resultado = x + y;
    return resultado;
};
*/

// console.log(soma(2, 2));
// console.log(soma (3, 1));
// console.log(soma(5, 10));

/*
const resultado = soma(Number(prompt('Digite o 1º valor:')), Number(prompt('Digite o 2º valor:')));
console.log(resultado);
*/

const raiz = (n) => { // ou function (n) ...
    return n ** 0.5; // Raiz Quadrada
};

document.write(`<strong>${raiz(9)}</strong><br/>`);
document.write(`<strong>${raiz(16)}</strong><br/>`);
document.write(`<strong>${raiz(25)}</strong><br/>`);