// ARMAZENANDO FUNÇÃO EM UMA VARIÁVEL
//função anonimata - sem nome.

const imprimirsoma = function (a,b) {
  console.log(a+b);
}

imprimirsoma(2,30);

//ARMAZENANDO FUNÇÃO ARROW (f1 reduzida) NUMA VARIÁVEL

const soma = (a,b) => {
  return a+b;
}

console.log(soma(2,2));

//RETORNO IMPLÍCITO.

const subtracao = (a,b) => a-b;

console.log(subtracao(5,10));