//escopos: global, função, bloco
const SERIE = "The Walking Dead";

console.log("global: ", SERIE);

function escopoFuncao() {

  //  SERIE = "Frieds";
  if (true) {
    if (true) {
        console.log("funcao: ", SERIE);
    }

  }
}

escopoFuncao();

{
}
