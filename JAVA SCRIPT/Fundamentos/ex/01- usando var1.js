//ESCOPO: local onde a variável é visível.
//VAR: VARIALVEL GLOBAL, visto em todo bloco de código, exceto função. 

{ { { { var sera = 'Será????'; console.log(sera);} } } }
console.log(sera);

function teste() {

  var local = 123;
  console.log(local);
  
}

teste();

//console.log(local);//