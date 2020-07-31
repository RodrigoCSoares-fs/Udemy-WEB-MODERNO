/**Array ou Vetor
 * Em java script o array se distique de outras linguagens7
 * por ser dinânica, assim como todo vetor pode ser indexado,
 * e possui funções parecidas com a pilha 'push' and 'pop'.
 */

 const vetor_Valores = [2.2,10.0,5.6];
 const vetor_heterogênio = [10, 'Rodrigo', {id:0}, false, null, ];

 console.log(vetor_Valores);
 console.log(vetor_Valores[2]);

 console.log(vetor_heterogênio);

 vetor_Valores.push(12.5);
 console.log(vetor_Valores);

 vetor_Valores.pop();

 console.log(vetor_Valores);

 console.log(vetor_Valores.length);

delete vetor_Valores[0];

console.log(vetor_Valores);
console.log("A quantidade de elementos contida no array é de: "+ vetor_Valores.length);

//ARRAYS - CONTEÚDOS;

console.log(`

    ARRAY GERALZÃO

`);

let frutas = ['maça', 'banana', 'goiaba', 'pera', 'mamão'];

console.log("AS FRUTAS CONTIDAS NO ARRAY SÃO: "+frutas);
console.log("A QUANDIDADE ELEMENTOS DO ARRAY: "+frutas.length);

frutas.push('pepino');
console.log("INSERINDO UM ELEMENTO NO ARRAY com PUSH: "+ frutas);

frutas.pop();
console.log("REMOVENDO UM ELEMENTO NO ARRAY com POP: "+ frutas);

frutas.shift();
console.log("REMOVENDO UM ELEMENTO DO INICIO DO ARRAY com SHIFT: "+ frutas);

frutas.unshift('morango');
console.log("ADICIONANDO UM ELEMENTO DO INICIO DO ARRAY com UNSHIFT: "+ frutas);

let posicao = frutas.indexOf('pera');
console.log(frutas);
console.log("A posição ou indice da fruta pera e: "+ posicao);

console.log(frutas);
let rm_fruta_pos = frutas.splice(3,1);//NA POSIÇÃO 3 REMOVA 1 ITEM.
console.log("REMOVENDO ELEMENTO POR POSIÇÃO COM SPLICE: " + rm_fruta_pos);
console.log(frutas);

let add_fruta_pos = frutas.splice(3,1,'abacaxi');//NA POSIÇÃO 3 REMOVA 1 ITEM.
console.log("ADICIONANDO ELEMENTO POR POSIÇÃO COM SPLICE: " + add_fruta_pos);
console.log(frutas);
console.log(frutas.length);

let copiar_vetor = frutas.slice();

console.log(copiar_vetor);
