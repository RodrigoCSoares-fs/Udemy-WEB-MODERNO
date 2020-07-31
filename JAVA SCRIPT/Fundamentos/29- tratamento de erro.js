function errortratado(erro){
    throw 'Acesse o membro da estrutura e não o objeto.'
    //throw new Error ('');
}

function mensagemignorante(object){
  try{
    console.log(object.mensagem.toUpperCase() + "!");
  }catch (e){
      errortratado(e);
  }finally{
      console.log('FINAL!');
  }
  
}

const obj = {
  mensagem: 'Você é um idiota'//para dar erro trocar o nome do membro do objeto
}

mensagemignorante(obj);