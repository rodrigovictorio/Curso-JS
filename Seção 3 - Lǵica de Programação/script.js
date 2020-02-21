/*
  VAR - só tem escopo de função
  LET - tem escopo de bloco { ... bloco }
*/

  const verdadeira = true;

/* - ESCOPO DE BLOCO -
  // A variável LET não pode ser redeclarada.
  let nome = 'Rodrigo'; // criando
  
  // A variável VAR ṕde ser redlecarada.
  var nome2 = 'Rodrigo';
    //Ex:
    //var nome2 = 'Victório' // redeclarada
  console.log(nome, nome2);
  
  if(verdadeira) {
    let nome = 'Raphael'; // criando
    var nome2 = 'Victório' // redeclarada
    console.log(nome, nome2);
    
    if(verdadeira) {
      let nome = 'Ricardo';
      console.log(nome, nome2);
    }
  }
  
  console.log(nome, nome2);
    RESULTAOD: - Rodrigo (LET) Rodrigo  (VAR)
               - Raphael (LET) Victório (VAR)
               - Ricardo (LET) Victório (VAR)
               - Rodrigo (LET) Victório (VAR)
*/

// var nome = 'Rodrigo';

/* - ESCOPO DE FUNÇÃO - 
  function falaOi() {
    var sobrenome = 'Victório';
    if(verdadeira) {
      var nome = 'Rodrigo';
    }
    console.log(nome, sobrenome);
  }
  
  falaOi();
*/

c
