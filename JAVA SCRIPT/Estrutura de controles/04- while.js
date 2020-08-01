let tabuada = (valor) => {
  let i=0;
    while(i<=10){
      console.log(valor + ' * ' + i + ' = ' + valor*i);
      i++;
    }
}

tabuada(5);

function gera_valor_int_aleatorio (min, max){
  const valor = (Math.random() * (max,min) - (min));
  return Math.floor(valor);
}

let op = -1;

while (op != -1){
  op = gera_valor_int_aleatorio(-1,10);
  console.log(`O valor para opção foi: ${op}.`);
}

console.log ('Até a próxima');