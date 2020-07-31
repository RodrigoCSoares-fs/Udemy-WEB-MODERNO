let peso1 = 1.0;

console.log(Number.isInteger(peso1)); //Descobre se um valor é inteiro.

const peso2 = Number('2.0');

console.log (peso1,peso2);

peso1 = 1.1;

console.log(Number.isInteger(peso1));

peso1 = 1.0;

const av1 = 9.871;
const av2 = 6.871;
const total = (av1*peso1 + av2 * peso2)/(peso1+peso2);

console.log(total);
console.log(total.toFixed(2)); // to fixed - diminui as casas decimais.
