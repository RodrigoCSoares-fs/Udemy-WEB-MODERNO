//Var = pode-se declarar em qualquel momento do código.
// let = declara-se apenas uma vez. (PREFERENCIAL)
//const = o valor contido na constante não é imultável.

var peso = 50.5;
let altura = 1.70;
const sexo = "M";

console.log (peso);
console.log (altura);
console.log (sexo);

var peso = peso + 5;
altura = altura + 0,15;
//sexo = "F"; //ERROR!

console.log (peso);
console.log (altura);
console.log (sexo);