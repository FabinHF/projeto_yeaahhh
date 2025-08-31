function tutorial(){
    document.getElementById("texto").innerHTML = "ttexto";
};

function escolher(botao){
    if(botao.id == "bulb"){
        caminho = bulbassauro;
    }else if(botao.id == "char"){
        caminho = charmander
    }else{
        caminho = squirtle
    };

    for(let i=0; i<4; i++){
        document.getElementById(i).innerHTML = ""
    }
    montarTorre()
};


//=================================================================================//

let bulbassauro = ["../img/pokemon/bulbassauro/1","../img/pokemon/bulbasasuro","../img/pokemon/bulbasasuro","../img/pokemon/bulbasasuro","../img/pokemon/bulbasasuro","../img/pokemon/bulbasasuro","../img/pokemon/bulbasasuro","../img/pokemon/bulbasasuro","../img/pokemon/bulbasasuro","../img/pokemon"];
let charmander = ["../img/pokemon/charmander/1","../img/pokemon/charmander","../img/pokemon/charmander","../img/pokemon/charmander","../img/pokemon/charmander","../img/pokemon/charmander","../img/pokemon/charmander","../img/pokemon/charmander","../img/pokemon/charmander","../img/pokemon/charmander"];
let squirtle = ["../img/pokemon/squirtle/1","../img/pokemon/squirtle","../img/pokemon/squirtle","../img/pokemon/squirtle","../img/pokemon/squirtle","../img/pokemon/squirtle","../img/pokemon/squirtle","../img/pokemon/squirtle","../img/pokemon/squirtle","../img/pokemon/squirtle"];

let caminho = [];
