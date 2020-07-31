function situacao(nota){
    if (nota>=7){
      console.log('Aprovado com nota: '+ nota);
    }
}

let situacaox = (nota) => {
  if (nota>=7){
    console.log('Aprovado com nota: '+ nota);
  }
}

let nota = 8.8, notax = 7;

situacao(nota);
situacaox(notax);