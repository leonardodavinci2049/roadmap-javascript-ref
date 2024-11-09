//escopos: global, função, bloco

/*
  Variáveis declaradas com, o operador VAR são acessíveis pelos esco´pos inferior
  e superior, ou seja, se uma variável é declarada dentro de um bloco, ela é acessível

  Variáveis  declaradas com o operador VAR dentr de escopos de blocos
  sofre hosting (elevação) para o escopo imediadamente superior (escopo de função ou global)

*/






 var serie = "Game of Thrones";

function escopoFuncao() {
  if (true) {
    if (true) {
      console.log("funcao: ", serie);
    
    }
  }


}

escopoFuncao();

 if (true) {

  console.log("global: ", serie);
}


// Escolpo de bloco
{
  console.log("global: ", serie);
}
