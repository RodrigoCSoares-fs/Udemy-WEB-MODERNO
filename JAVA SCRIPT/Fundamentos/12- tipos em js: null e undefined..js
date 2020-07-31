//UNDEFINED - A VARIÁVEL NUNCA FOI INICIALIZADA.
//NULL - AUXÊNCIA DE VALOR | UTILIZA-SE PARA NÃO APONTAR MAIS PARA O ENDEREÇO DE MEMÓRIA.

let valor;

console.log(valor);

valor = null;

console.log(valor);

const produto = {};

console.log(produto)

console.log(produto.preço); //undefined;

produto.preço = 3.50;

console.log(produto)

produto.categoria = [1,2,3,4,5];

console.log (produto);

//delete produto.preço; // retirar atributo de um objeto.

produto.preço = null //sem preço | não é possivel acessar os membros quando ta nulo.

console.log (!!produto.preço);

