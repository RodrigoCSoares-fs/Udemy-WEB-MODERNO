function gera_valor_int_aleatorio (min, max){
  const valor = Math.random() * (max-min) + (min);
  return Math.floor(valor);
}

let op = -1;

do{
  op = gera_valor_int_aleatorio(-1,10);
  console.log('O valor para op foi: '+ op);
}while (op !== -1);

console.log ('Até a próxima');