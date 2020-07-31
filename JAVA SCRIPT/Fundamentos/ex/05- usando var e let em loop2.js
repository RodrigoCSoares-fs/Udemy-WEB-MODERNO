//var não possui escopo de bloco.
//let a variavel tem consiência do local que ela foi definida no EB.

const funcs = [], funcs1 = [];

for (var i=0;i<10;i++){
  funcs.push(function(){
    console.log(i);

  })
}

funcs[2]();
funcs[8]();

for (let j=0;j<10;j++){
  funcs1.push(function(){
    console.log(j);

  })
}

funcs1[2]();
funcs1[8]();