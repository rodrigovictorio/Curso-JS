/* 
    Tipos de Dados:
        - Primitivos(imutáveis): string, number, boolean, undefined, null (bigint, symbol)

        - Referência(mutável): array, object, function
*/

/*
    // Valor PRIMITIVO
    let a = 'A';
    let b = a;
        console.log(a, b);

    a = 'Outra coisa';
        console.log(a, b);
*/

/*
    // Valor por REFERÊNCIA
    let a = [1, 2, 3];
    let b = [...a];      // let b = a;
    let c = b;
    console.log(a, b);

    a.push(4);
    console.log(a, b);

    b.pop();
    console.log(a, b);

    a.push('Rodrigo');
    console.log(c, a);
*/

const a = {
    nome: 'Rodrigo',
    sobrenome: 'Victório'
};
const b = {...a}; // SRPEAD

a.nome = 'Raphael';
console.log(a);
console.log(b);