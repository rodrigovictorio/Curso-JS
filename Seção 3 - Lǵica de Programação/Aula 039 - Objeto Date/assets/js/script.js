// DATE é uma função construtora.
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date

/*
    const tresHoras = 60 * 60 * 3 * 1000;
    const umDia = 60 * 60 * 24 * 1000;
    const data = new Date(0 + tresHoras + umDia); // 01/01/1970 - Timestamp unix ou época unix

    const data = new Date(2019, 3, 20, 15, 14, 27); // ano, mês, dia, horas, minutos, segundos e milisegundos
*/

/*
    const data = new Date(1570473826636); // '2019-07-09T11:00:00.1000'
    console.log('Dia', data.getDate());
    console.log('Mês', data.getMonth() + 1); // Mẽs começa do zero
    console.log('Ano', data.getFullYear());
    console.log('Hora', data.getHours());
    console.log('min', data.getMinutes());
    console.log('seg', data.getSeconds());
    console.log('mseg', data.getMilliseconds());
    console.log('Dia da semana', data.getDay()); // 0 - Domingo, 6 - Sábado
    console.log(data.toString());
    //console.log(Date.now());
*/

function zeroEsquerda(numero) {
    return numero >= 10 ? numero : `0${numero}`;
}

function formataData(data) {
    const dia = zeroEsquerda(data.getDate());
    const mes = zeroEsquerda(data.getMonth() + 1);
    const ano = zeroEsquerda(data.getFullYear());
    const hora = zeroEsquerda(data.getHours());
    const min = zeroEsquerda(data.getMinutes());
    const seg = zeroEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);