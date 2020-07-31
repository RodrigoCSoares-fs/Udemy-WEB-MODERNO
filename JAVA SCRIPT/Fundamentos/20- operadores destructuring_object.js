let profissional = {
  nome: 'Rodrigo',
  idade: 21,
  peso: 70.0,
  endereco: {
      rua: 'Major Pedro Alcântara',
      numero: '175',
      bairro: 'Cocobó',
      cidade: 'Iguatu',
      estado: 'CE',
      cep: '63504-190'
  },
  programador: true
}

let {nome,idade} = profissional //tire nome e idade do objeto pessoa.

console.log(nome);
console.log(idade);

let {nome:name,idade:age} = profissional //modificando os nomes das variáveis.
console.log(name,age);

let {endereco: {cep, ponto_referencia='prox ao sampaio'}} = profissional;

console.log(cep,ponto_referencia);

console.log(profissional);