console.log(Math.ceil(6.1));

const obj = {};

obj.atributo_Nome = [];

function Obj (nome){

    this.nome = nome;// this serve para deixar atributo / função do obj publico para outros objs.
}

const obj2 = new Obj('Cadeira');
const obj3 = new Obj('Mesa');

console.log(obj2.nome);
console.log(obj3.nome);
