let isativo = false;
console.log(isativo);

  isativo = true;
  console.log(isativo);

  isativo = 1;
  console.log(!!isativo);

  isativo = 0;
  console.log(!!isativo);

  //todos os números inteiros são verdadeiros com excessão do 0.

  console.log('OS VERDADEIROS: ');

  console.log(!!-1);
  console.log(!![]);
  console.log(!!' ');
  console.log(!!'textodentro');
  console.log(!!{});
  console.log(!!Infinity);
  console.log(!!(isativo = true));

  console.log('OS FALSOS');
  console.log(!!''); //string vazia.
  console.log(!!null);
  console.log(!!0);
  console.log(!!NaN);
  console.log(!!undefined);
  console.log(!!(isativo = false));

  console.log (!!('' || null || NaN));

  let nome = '';

  console.log(nome || 'nome desconhecido.');

  nome = 'Mayara';

  console.log(nome || 'nome desconhecido.');