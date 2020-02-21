const saida = document.getElementById("container");

function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto;

    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo';
            break;
        case 1:
            diaSemanaTexto = 'Segunda-Feira';
            break;
        case 2:
            diaSemanaTexto = 'Terça-Feira';
            break;
        case 3:
            diaSemanaTexto = 'Quarta-Feira';
            break;
        case 4:
            diaSemanaTexto = 'Quinta-Feira';
            break;
        case 5:
            diaSemanaTexto = 'Sexta-Feira';
            break;
        case 6:
            diaSemanaTexto = 'Domingo';
            break;
        default:
            diaSemanaTexto = '';
            break;
    }
    return diaSemanaTexto;
}

function getMesAnoTexto(mesAno) {
    let mesAnoTexto;

    switch (mesAno) {
        case 0:
            mesAnoTexto = 'Janeiro';
            break;
        case 1:
            mesAnoTexto = 'Fevereiro';
            break;
        case 2:
            mesAnoTexto = 'Março';
            break;
        case 3:
            mesAnoTexto = 'Abril';
            break;
        case 4:
            mesAnoTexto = 'Maio';
            break;
        case 5:
            mesAnoTexto = 'Junho';
            break;
        case 6:
            mesAnoTexto = 'Julho';
            break;
        case 7:
            mesAnoTexto = 'Agosto';
            break;
        case 8:
            mesAnoTexto = 'Setembro';
            break;
        case 9:
            mesAnoTexto = 'Outubro';
            break;
        case 10:
            mesAnoTexto = 'Novembro';
            break;
        case 11:
            mesAnoTexto = 'Dezembro';
            break;
        default:
            mesAnoTexto = '';
            break;
    }
    return mesAnoTexto;
}

function zeroEsquerda(numero) {
    return numero >= 10 ? numero : `0${numero}`;
}

let dia;
let diaSemana;
let mes;
let ano2;
let ano4;
let hora;
let min;
let seg;
let mseg;
let tz;

function formataData(data) {
    dia = zeroEsquerda(data.getDate());         // 1-31
    diaSemana = zeroEsquerda(data.getDay());    // 0-6 (zero=domingo)
    mes = zeroEsquerda(data.getMonth());        // 0-11 (zero=janeiro)
    ano2 = zeroEsquerda(data.getYear());        // 2 dígitos
    ano4 = zeroEsquerda(data.getFullYear());    // 4 dígitos
    hora = zeroEsquerda(data.getHours());       // 0-23
    min = zeroEsquerda(data.getMinutes());      // 0-59
    seg = zeroEsquerda(data.getSeconds());      // 0-59
    mseg = zeroEsquerda(data.getMilliseconds());// 0-999
    tz = zeroEsquerda(data.getTimezoneOffset());// em minutos
}



const data = new Date();
const dataBrasil = formataData(data);

let diaDaSemana = data.getDay();
const diaSemanaTexto = getDiaSemanaTexto(diaDaSemana);

let mesDoAno = data.getMonth();
const mesAnoTexto = getMesAnoTexto(mesDoAno);

// console.log(dataBrasil);
saida.innerHTML = `${diaSemanaTexto}, ${dia} de ${mesAnoTexto} de ${ano4} <br/> ${hora}:${min}`;
