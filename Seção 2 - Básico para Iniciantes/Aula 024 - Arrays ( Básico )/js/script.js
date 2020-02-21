const alunos = [
    'Rodrigo',
    'Lorraine',
    'Raphael'
]
// ARRAY é um OBJETO


delete alunos[1]; // Delete o elemento do ARRAY porém permanece vazio

// FUNÇÂO que adiciona no final mais um elemento a minha ARRAY
alunos.push('Miguel');

// FUNÇÂO que adiciona no início mais um elemento a minha ARRAY
alunos.unshift('Jesus Cristo');

// FUNÇÂO que elimina no final um elemento do ARRAY
alunos.pop();
const removido = alunos.pop();
console.log(removido);
// FUNÇÂO que elimina no início um elemento do ARRAY
alunos.shift();
const removido2 = alunos.shift();
console.log(removido2);

// alunos[alunos.length] = 'Miguel'; // adiciona mais um elemento à ARRAY

// alunos[3] = 'Iria';
console.log(alunos);

// console.log(alunos);
// console.log(alunos[0]);
// console.log(alunos(2));