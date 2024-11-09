//escopos: global, função, bloco function escopoFuncao() { if(true) { if(true) {


function escopoFuncao() {

    console.log('funcao: ',serie2) 

    console.log('funcao: ', serie) 
       

}

{

    var serie = 'Friends' 

    let serie2 = 'Game of Thrones' 

}


console.log('funcao: ', serie2) 


escopoFuncao()
