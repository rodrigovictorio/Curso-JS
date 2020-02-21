/*
    IF - podemos usá-los sozinho
    Sempre que utilizo a palavra ELSE, preciso de um IF antes
    Posso ter vários ELSE IF na checagem
    Só posso ter um ELSE na checagem
    Podemos usar condições sem ELSE IF utilizando apenas IF & ELSE
*/

const hora = 45;

if (hora >= 0 && hora <= 11) {
    console.log("Bom dia!");
} else if (hora >= 12 && hora <= 17) {
    console.log("Boa tarde!");
} else if (hora >= 18 && hora <= 23) {
    console.log("Boa noite!");
} else {
    console.log("Não sei");
}