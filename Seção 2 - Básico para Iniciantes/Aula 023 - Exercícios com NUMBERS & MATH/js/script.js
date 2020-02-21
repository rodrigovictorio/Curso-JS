let numero = Number(prompt('Digite um número:'));
let numeroTitulo = document.getElementById('numero-titulo');
let texto = document.getElementById('texto');

numeroTitulo.innerHTML += numero;
texto.innerHTML = '';

texto.innerHTML += `<p>Raiz quadrada: <strong>${numero ** 0.5}</strong></p>`;

texto.innerHTML += `<p>${numero} é inteiro: <strong>${Number.isInteger(numero)}</strong></p>`;

texto.innerHTML += `<p>É NaN: <strong>${Number.isNaN(numero)}</strong></p>`;

texto.innerHTML += `<p>Arredondado para baixo: <strong>${Math.floor(numero)}</strong></p>`;

texto.innerHTML += `<p>Arredondado para cima: <strong>${Math.ceil(numero)}</strong></p>`;

texto.innerHTML += `Com duas casas decimais: <strong>${numero.toFixed(2)}</strong>`;


/*
document.body.innerHTML += `<h1>Seu número é ${numero}.</h1>`;

document.body.innerHTML += `<p>Raiz quadrada: ${numero ** 0.5}</p>`;

document.body.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`;

document.body.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}</p>`;

document.body.innerHTML += `<p>Arredondado para baixo: ${Math.floor(numero)}</p>`;

document.body.innerHTML += `<p>Arredondado para cima: ${Math.ceil(numero)}</p>`;

document.body.innerHTML += `Com duas casas decimais: ${numero.toFixed(2)}`;
*/