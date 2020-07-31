const nome =  "RODRIGO";
const concat = "Olá " + nome+ "!";

console.log (concat);

const templatestring = ` Olá ${nome}!, seja bem vindo!
    Sr. ${nome}, você está aprendendo template string 
    que tem a finalidade de respeitar as quebras de linhas.
    
    Com o $ e {} é possivel fazer a interpolação, que significar,
    interpretar o conteúdo da variável e trazer para visualização.`;

    console.log(templatestring);

    //Com o template também é possível utilizar em expressões

    console.log(`
    
    Utilizando expressões com template string e interpolação:
    
                  1 + 1 = ${1+1}
    `);

    console.log(`
    Utilizando funções em templates em S&I:
    `);

    const up = string => string.toUpperCase(); //arrow function

    console.log(`      Ei!? ${up('maria lucia')}.
    `);



