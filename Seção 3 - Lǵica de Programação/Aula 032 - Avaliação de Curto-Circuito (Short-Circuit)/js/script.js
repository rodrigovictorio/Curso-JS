/*

    && = FALSE && TRUE = FALSE
    || = TRUE || FALSE = Obs: vai retornar o "valor verdadeiro"

    Valores que são avaliados em FALSE:
        - FALSY
        - false
        - 0
        - ' ', " " e ` `
        - null / undefined
        - NaN

*/

/*
    function falaOi() {
        return 'Oi';
    }

    const vaiExecutar = 'Rodrigo';

    console.log(vaiExecutar && falaOi());
*/

// console.log(0 || false || null || 'Rodrigo Victório' || true);

const corUsuario = null;
const corPadrao = corUsuario || 'lightgray'; // irá retornar o 1º valor verdadeiro
    console.log(corPadrao);

// Avaliações com todos os valores verdadeiros, o último valor é retornado.
// Avaliações com qualquer valor falso (em qualquer posição) o primeiro valor falso encontrado é retornado.