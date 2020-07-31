const saudacao = 'Olá pessoal!' //contexto léxico (definição local do código)

function executar (){
    const saudacao = "Bem vindo!" //contexto léximo restrito.
    return saudacao;
}

//objs são grupos aninhados de identificador/valor

const profissional = {
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

console.log(saudacao);
console.log(executar());
console.log(profissional);
console.log(typeof profissional);


