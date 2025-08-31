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

let bulbassauro = ["../img/pokemon/bulbassauro/","../img/pokemon/bulbasasuro","../img/pokemon/bulbasasuro","../img/pokemon/bulbasasuro","../img/pokemon/bulbasasuro","../img/pokemon/bulbasasuro","../img/pokemon/bulbasasuro","../img/pokemon/bulbasasuro","../img/pokemon/bulbasasuro","../img/pokemon"];
let charmander = ["../img/pokemon/charmander/","../img/pokemon/charmander","../img/pokemon/charmander","../img/pokemon/charmander","../img/pokemon/charmander","../img/pokemon/charmander","../img/pokemon/charmander","../img/pokemon/charmander","../img/pokemon/charmander","../img/pokemon/charmander"];
let squirtle = ["../img/pokemon/squirtle/1","../img/pokemon/squirtle","../img/pokemon/squirtle","../img/pokemon/squirtle","../img/pokemon/squirtle","../img/pokemon/squirtle","../img/pokemon/squirtle","../img/pokemon/squirtle","../img/pokemon/squirtle","../img/pokemon/squirtle"];

let caminho = [];
/* Linha evolutiva dos iniciais ---------------------------------------- /
const evolucao_bulbassauro = ["Bulbasaur", "Ivysaur", "Venusaur"];
const pkm_img_bulba_evolucao = ["001", "002", "003"];

const evolucao_charmander = ["Charmander", "Charmeleon", "Charizard"];
const pkm_img_charmander_evolucao = ["004", "005", "006"];

const evolucao_squirtle = ["Squirtle", "Wartortle", "Blastoise"];
const pkm_img_squirtle_evolucao = ["007", "008", "009"];
/ Linha evolutiva dos iniciais ---------------------------------------- /

/ Caminho de cada inicial ---------------------------------------- /
const caminho_bulbassauro = ["Caterpie","Pidgey","Vulpix","Paras","Mankey","Growlithe","Magmar","Moltres","Mewtwo"];
const pkm_img_bulbassauro = ["010", "016", "037", "046", "056", "058", "126", "146", "150"];
/ ------------------------- /
const caminho_charmander = ["Spearow","Sandshrew","Nidorina","Psyduck","Tentacruel","Golem","Lapras","Articuno","Mewtwo"];
const pkm_img_charmander = ["021", "027", "030", "054", "073", "076", "131", "144", "150"];
/ ------------------------- /
const caminho_squirtle = ["Rattata","Ekans","Pikachu","Victreebel","Voltorb","Scyther","Electabuzz","Zapdos","Mewtwo"];
const pkm_img_squirtle = ["019", "023", "025", "071", "100", "123", "125", "145", "150"];
/ Caminho de cada inicial ---------------------------------------- */