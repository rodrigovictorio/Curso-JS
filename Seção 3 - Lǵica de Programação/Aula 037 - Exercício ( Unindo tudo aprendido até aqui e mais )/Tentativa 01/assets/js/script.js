function calculando() {
    const peso = Number(document.querySelector("#input-peso").value);
    const altura = Number(document.querySelector("#input-altura").value);
    let indiceMassaCorporal = (peso / (altura * altura)).toFixed(1);

    let saida = document.querySelector("#saida");

    saida.innerHTML = " "


    if (indiceMassaCorporal <= 18.5) {
        saida.innerHTML = `Seu IMC é ${indiceMassaCorporal} (Abaixo do peso)`;
        document.querySelector("#saida").style.backgroundColor = 'rgb(42, 228, 156)';
    } else if (indiceMassaCorporal > 18.5 && indiceMassaCorporal <= 24.9) {
        saida.innerHTML = `Seu IMC é ${indiceMassaCorporal} (Peso Normal)`;
        document.querySelector("#saida").style.backgroundColor = 'rgb(42, 228, 156)';
    } else if (indiceMassaCorporal >= 25 && indiceMassaCorporal <= 29.9) {
        saida.innerHTML = `Seu IMC é ${indiceMassaCorporal} (Sobrepeso)`;
        document.querySelector("#saida").style.backgroundColor = 'rgb(42, 228, 156)';
    } else if (indiceMassaCorporal >= 30 && indiceMassaCorporal <= 34.9) {
        saida.innerHTML = `Seu IMC é ${indiceMassaCorporal} (Obesidade Grau 1)`;
        document.querySelector("#saida").style.backgroundColor = 'rgb(42, 228, 156)';
    } else if (indiceMassaCorporal >= 35 && indiceMassaCorporal <= 39.9) {
        saida.innerHTML = `Seu IMC é ${indiceMassaCorporal} (Obesidade Grau 2)`;
        document.querySelector("#saida").style.backgroundColor = 'rgb(42, 228, 156)';
    } else if (indiceMassaCorporal >= 40) {
        saida.innerHTML = `Seu IMC é ${indiceMassaCorporal} (Obesidade Grau 3)`;
        document.querySelector("#saida").style.backgroundColor = 'rgb(42, 228, 156)';
    } else {
        saida.innerHTML = `Altura inválida`;
        document.querySelector("#saida").style.backgroundColor = 'rgb(219, 56, 64)';
    }
}
