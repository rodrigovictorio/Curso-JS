function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto;

    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo';
            break;
        case 1:
            diaSemanaTexto = 'Segunda-feira';
            break;
        case 2:
            diaSemanaTexto = 'Terça-feira';
            break;
        case 3:
            diaSemanaTexto = 'Quarta-feira';
            break;
        case 4:
            diaSemanaTexto = 'Quinta-feira';
            break;
        case 5:
            diaSemanaTexto = 'Sexta-feira';
            break;
        case 6:
            diaSemanaTexto = 'Sábado';
            break;
        default:
            diaSemanaTexto = '';
            break;
    }
    return diaSemanaTexto;
}

const data = new Date('1888-07-09 00:00:00');
let diaSemana = data.getDay(); // getDay - pegar o dia da semana
//const dia = data.getDate();      // getDate - pegar o dia
//diaSemana = 7;
//let diaSemanaTexto;
const diaSemanaTexto = getDiaSemanaTexto(diaSemana);

// switch (diaSemana) {
//     case 0:
//         diaSemanaTexto = 'Domingo';
//         break;
//     case 1:
//         diaSemanaTexto = 'Segunda-feira';
//         break;
//     case 2:
//         diaSemanaTexto = 'Terça-feira';
//         break;
//     case 3:
//         diaSemanaTexto = 'Quarta-feira';
//         break;
//     case 4:
//         diaSemanaTexto = 'Quinta-feira';
//         break;
//     case 5:
//         diaSemanaTexto = 'Sexta-feira';
//         break;
//     case 6:
//         diaSemanaTexto = 'Sábado';
//         break;
//     default:
//         diaSemanaTexto = '';
//         break;
// }

// if (diaSemana === 0) {
//     diaSemanaTexto = `Domingo Dia ${dia}`;
// } else if (diaSemana === 1) {
//     diaSemanaTexto = `Segunda-feira - Dia ${dia}`;
// } else if (diaSemana === 2) {
//     diaSemanaTexto = `Terça-feira - Dia ${dia}`;
// } else if (diaSemana === 3) {
//     diaSemanaTexto = `Quarta-feira - Dia ${dia}`;
// } else if (diaSemana === 4) {
//     diaSemanaTexto = `Quinta-feira - Dia ${dia}`;
// } else if (diaSemana === 5) {
//     diaSemanaTexto = `Sexta-feira - Dia ${dia}`;
// } else if (diaSemana === 6) {
//     diaSemanaTexto = `Sábado - Dia ${dia}`;
// } else {
//     diaSemanaTexto = ' ';
// }

console.log(diaSemana, diaSemanaTexto);