function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

  /*
    form.onsubmit = function (evento) {
        evento.preventDefault();
        alert(1);
        console.log("Foi enviado.")
    };
  */

//  let contador = 1;

    const pessoas = [];

    function recebeEventoForm(evento) {
        evento.preventDefault();

      /*
        console.log(`FORM não foi enviado ${contador}`);
        contador += 1;
      */

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

//      console.log(nome.value, sobrenome.value, peso.value, altura.value);

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(pessoas);

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;

    }

    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();