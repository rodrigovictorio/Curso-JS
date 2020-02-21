/*
    const nome001 = 'Rodrigo';
    const sobrenome001 = 'Victório';
    const idade001 = '31 anos';

    const nome002 = 'Lorraine';
    const sobrenome002 = 'Rangel';
    const idade002 = '27 anos';

    const nome003 = 'Raphael';
    const sobrenome003 = 'Victório';
    const idade003 = '10 anos';

    console.log(nome001, sobrenome001, idade001);
    console.log(nome002, sobrenome002, idade002);
    console.log(nome003, sobrenome003, idade003);
*/

// ARRAY = [] e OBJETO = {}

/*
    const pessoa001 = {
        nome: 'Rodrigo',
        sobrenome: 'Victório',
        idade: 31
    };

    const pessoa002 = {
        nome: 'Lorraine',
        sobrenome: 'Rangel',
        idade: 27
    };

    const pessoa003 = {
        nome: 'Raphael',
        sobrenome: 'Victório',
        idade: 10
    };

    console.log(pessoa001.nome, pessoa001.sobrenome, pessoa001.idade);
    console.log(pessoa002.nome, pessoa002.sobrenome, pessoa002.idade);
    console.log(pessoa003.nome, pessoa003.sobrenome, pessoa003.idade);
*/

/*
    // FACTORY: função que cria objeto.
    function criaPessoa (nome, sobrenome, idade) { // parâmetros
        return { // ou... return { nome, sobrenome, idade };
            nome: nome,             // ou... nome,
            sobrenome: sobrenome,   // ou... sobrenome,
            idade: idade            // ou... idade
        };
    };

    // ARGUMENTO é valor passado para o PARÂMETRO.
    const pessoa1 = criaPessoa(prompt('Digite seu nome:'), prompt('Digite seu sobrenome: '), prompt('Digite sua idade: ')); // argumentos

    const pessoa2 = criaPessoa(prompt('Digite seu nome:'), prompt('Digite seu sobrenome: '), prompt('Digite sua idade: '));

    const pessoa3 = criaPessoa(prompt('Digite seu nome:'), prompt('Digite seu sobrenome: '), prompt('Digite sua idade: '));

    const pessoa4 = criaPessoa(prompt('Digite seu nome:'), prompt('Digite seu sobrenome: '), prompt('Digite sua idade: '));

    const pessoa5 = criaPessoa(prompt('Digite seu nome:'), prompt('Digite seu sobrenome: '), prompt('Digite sua idade: '));

    console.log(pessoa1);
    console.log(pessoa2);
    console.log(pessoa3);
    console.log(pessoa4);
    console.log(pessoa5);
*/

const pessoa1 = {
    nome: 'Rodrigo',
    sobrenome: 'Victório',
    idade: 31,

    fala() {
        this.idade += 10;

        console.log(`${this.nome} ${this.sobrenome} está falando oi e tem ${this.idade} anos.`);
    }
};

pessoa1.fala();