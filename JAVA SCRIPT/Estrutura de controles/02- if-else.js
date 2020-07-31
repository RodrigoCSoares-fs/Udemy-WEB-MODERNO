let escolaridade = (pessoa) => {
  if (pessoa.idade > 3 && pessoa.idade <= 7){
    console.log(pessoa.nome + ' tem '+pessoa.idade+ ' anos e faz o infantil  I');
  }else if (pessoa.idade > 7 && pessoa.idade <=14){
    console.log(pessoa.nome + ' tem '+pessoa.idade+ ' anos e faz o fundamental');
  }else if (pessoa.idade > 14 && pessoa.idade <=18){
    console.log(pessoa.nome + ' tem '+pessoa.idade+ ' anos e faz o ensino médio');
  }else if (pessoa.idade>18){
    console.log(pessoa.nome + ' tem '+pessoa.idade+ ' anos. '+pessoa.nome+ ' trabalha ou faz faculdade ou é aposentado(a)!');
  }else{
    console.log(pessoa.nome+ ' é um bebê');
  }
}

let idade = (min=0.1,max=100) =>{

  return Math.random() * (max - min) + min;

}

let pessoa = {
    nome: 'Maria',
    idade: idade().toFixed(0)
}

  escolaridade(pessoa);