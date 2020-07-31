//STRING - CADEIA DE CARACTERES ("", '').

const escola = "udemy";//string inica na posição 0.

console.log(escola.charAt(4));//pega o caracteres que está na posição 4.
console.log(escola.charCodeAt(3));//mostra o valor que o caractere possui na tabela unicode.
console.log(escola.indexOf('y')); //verifica se o caractere procurado está na cadeia e mostra sua posição.
console.log(escola.substring(1))//pega apenas os caracters a partir da posição informada.
console.log(escola.substring(0,4));//pega os caracteres contidos da posição 0 até pos-1.
console.log("escola ".concat(escola));//junta - concatena as palavras.
console.log("escola " + escola);//concatena também;
console.log(escola.replace('u', 'M'));//substitui o caractere informado por outro valor.
console.log(escola.replace(/\w/g, 'u'));//substitui todos os caracteres por outro valor.
console.log("RODRIGO,TIAGO,TALISSON".split(','));//gera um array por meio dos caractares passando para a split qual o separador.