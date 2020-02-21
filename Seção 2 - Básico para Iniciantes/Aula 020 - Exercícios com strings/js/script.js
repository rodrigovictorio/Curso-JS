const nome = prompt('Digite seu nome completo:');
// let nome = 'Rodrigo Victório'


document.body.innerHTML += `Seu nome é: <strong>${nome}</strong>.<br/>`;

// length
document.body.innerHTML += `Seu nome tem <strong>${nome.length} letras</strong>.<br/>`;

// charAt
document.body.innerHTML += `A segunda letra do seu nome é a letra <strong>${nome[1]}</strong>.<br/>`; // ${nome.charAt(1)}

// indexOf
document.body.innerHTML += `Qual o primeiro índice da letra a no seu nome? <strong>${nome.indexOf('')}</strong>.<br/>`;

// lastIndexOf
document.body.innerHTML += `Qual o último índice da letra a no seu nome? ${nome.lastIndexOf('')}.<br/>`;

// slice
document.body.innerHTML += `As últimas 3 letras do seu nome são: <strong>${nome.slice(-3, nome.length)}</strong>.<br/>`;

// split
document.body.innerHTML += `As palavras do seu nome são: <strong>${nome.split(' ')}</strong>.<br/>`;

// toUpperCase
document.body.innerHTML += `Seu nome com letras maiúsculas: <strong>${nome.toUpperCase()}</strong>.<br/>`;

// toLowerCase
document.body.innerHTML += `Seu nome com letras minúsculas: <strong>${nome.toLowerCase()}</strong>.<br/>`;
