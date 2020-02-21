// IEEE 754-2008 ( Padrão usado pelo Javascript )
let num1 = 0.7;
let num2 = 0.1;
let temp = num1 + 'Olá'

num1 += num2; // num1 = num1 + num2
num1 += num2;
num1 += num2;

num1 = Number(num1.toFixed(2));

console.log(num1);
console.log(Number.isInteger(num1))

/*
    num1toString() - converte o número para string

    num1.toString(2) - converte o número em  binário

    num1.toFixed() - arredondando as casas decimais
    
    Number.isInteger(num1) - Verifica se o número é inteiro

    Number.isNaN(temp) - retorna verdadeiro sempre que NÃO FOR UM NÚMERO.


*/ 