/**Função: método | ação
 * 
 * Trecho de código que pode ser utilizado em diversas partes do código.
 * recebem parametros (not) | retornam algo (not)
*/

//função sem retorno.
function imprimirSoma (a,b){

  console.log (a+b);

}

imprimirSoma(3,4);
imprimirSoma(2);//NAN

//função com retorno

function soma(a, b=0){
  return a+b;
}

console.log(soma(2));
console.log(soma(2,8));