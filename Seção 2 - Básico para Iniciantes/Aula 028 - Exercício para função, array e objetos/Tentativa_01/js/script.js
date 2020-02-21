function calcular() {
    const nome = document.getElementById("fname").value;
    const sobrenome = document.getElementById("fsurname").value;
    const peso = Number(document.getElementById("fweight").value);
    const altura = Number(document.getElementById("fheight").value);

    let resul = document.getElementById("saida");

    resul.innerHTML = `${nome} ${sobrenome} ${peso} ${altura}`;


}