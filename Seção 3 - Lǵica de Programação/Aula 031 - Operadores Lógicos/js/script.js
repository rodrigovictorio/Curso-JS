/*
    OPERADORES LÓGICOS
    - ( && ) - AND (E)
        TRUE && TRUE = TRUE
        TRUE && FALSE = FALSE
        FALSE && FALSE = FALSE

    - ( || ) - OR (OU)
        TRUE || TRUE = TRUE
        TRUE || FALSE = TRUE
        FALSE || FALSE = FALSE

    - ( ! )  - NOT (NÃO)
        ! TRUE = FALSE
        ! FALSE = TRUE

*/

// Exemplo em uma aplicação real

const usuario = 'Rodrigo';
const senha = '123456';
const vaiLogar = usuario === 'Rodrigo' && senha === '123456';

    console.log(vaiLogar);