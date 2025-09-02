function tutorial(){
    const painel = document.getElementById("tutorialPanel");
    const botao = document.getElementById("tuto");
    if (painel.style.display === "none" || painel.style.display === "") {
        // Aqui dá a posição dinâmica ao lado do botão
        const rect = botao.getBoundingClientRect();
        painel.style.top = (window.scrollY + rect.bottom + 9) + "px";
        painel.style.left = (window.scrollX + rect.left - 40) + "px";

        document.getElementById("tutorialContent").innerHTML = (`
            PokeTower é uma fangame da franquia Pokémon com toques e elementos da franquia de Mortal Kombat.<br><br>
            O objetivo do jogo é você conseguir levar o seu pokémon inicial até o topo da torre superando seus desafios.<br><br>
            Você se vê diante de um grande desafio<br>
            Você é movido por fome de luta e poder.<br>
            Suba na torre e conquiste cada andar!<br>
            Siga sem medo pelo caminho do mestre pokémon!<br><br>
            O jogo conta com mecânicas de evolução e combate por turnos como;<br><br>
            - <span style="color:tomato;">Ataque</span> (Você dá um dano básico em seu oponente)<br><br>
            - <span style="color:cyan;">Defesa</span> (Você reduz o dano do próximo ataque do oponente)<br><br>
            - <span style="color:lightgreen;">Carregar</span> (Você aumenta o dano do seu próximo ataque, você pode acumular até 3 cargas mas lembre-se que você ficará vulnerável!!)<br><br>
            Há também um caminho pré-definido de inimigos dependendo do pokémon inicial escolhido. Seu inicial enfrentará seus adversários sozinhos 
            mas ele tem um enorme potencial de crescimento e evolução.<br>
            Não se esqueça também de que o próximo pokémon de cada andar sempre será mais forte!!<br>
            Ao chegar no final da torre, você se deparará com o PODEROSO <span style="background-color: black; color:white;">!@#$%!</span> o Chefe FINAL da torre!! Boa sorte.<br>
        `);
        painel.style.display = "block";
    } else {
        painel.style.display = "none";
    };
};


function escolher(botao){
    if(botao.id == "bulb"){
        caminho = bulbassauro;
        escolha = in_bulb;
        nome_ali = "Bulbassauro"
        nome_arq = "bulbassaur"
    }else if(botao.id == "char"){
        caminho = charmander;
        escolha = in_char;
        nome_ali = "Charmander"
        nome_arq = "charmander"
    }else{
        caminho = squirtle;
        escolha = in_squir;
        nome_ali = "Squirtle"
        nome_arq = "squritle"
    };
    for(let i=0; i<4; i++){
        document.getElementById(i).innerHTML = "";
    };

    montarCampo();
};

function montarCampo(){
    if(nivel >= 1 && nivel <=3 ){
        document.getElementById("pkm_ali").innerHTML = escolha[0];
    }else if(nivel >3 && nivel <= 6){
        document.getElementById("pkm_ali").innerHTML = escolha[1];
    }else{
        document.getElementById("pkm_ali").innerHTML = escolha[2];
    };

    document.getElementById(0).innerHTML = "<h1>Próximos Inimigos</h1>";

    for(let i=1; i<10; i++){
        document.getElementById(i).innerHTML = caminho[i-1];
    };

    batalha();
};

function batalha(){
    let text = '<img class="ibage" src="../img/pokemon/' + nome_arq +'/' + nivel +'.png">'
    console.log(text)
    document.getElementById("pkm_adv").innerHTML = text
};

//=================================================================================//
let status = [];
let caminho = [];
let escolha = [];

// Caminho imagem //

const bulbassauro = ['<img class="ibageTorre" src="../img/pokemon/bulbassaur/1.png">','<img class="ibageTorre" src="../img/pokemon/bulbassaur/2.png">','<img class="ibageTorre" src="../img/pokemon/bulbassaur/3.png">','<img class="ibageTorre" src="../img/pokemon/bulbassaur/4.png">','<img class="ibageTorre" src="../img/pokemon/bulbassaur/5.png">','<img class="ibageTorre" src="../img/pokemon/bulbassaur/6.png">','<img class="ibageTorre" src="../img/pokemon/bulbassaur/7.png">','<img class="ibageTorre" src="../img/pokemon/bulbassaur/8.png">','<img class="ibageTorre" src="../img/pokemon/bulbassaur/9.png">'];
const charmander = ['<img class="ibageTorre" src="../img/pokemon/charmander/1.png">','<img class="ibageTorre" src="../img/pokemon/charmander/2.png">','<img class="ibageTorre" src="../img/pokemon/charmander/3.png">','<img class="ibageTorre" src="../img/pokemon/charmander/4.png">','<img class="ibageTorre" src="../img/pokemon/charmander/5.png">','<img class="ibageTorre" src="../img/pokemon/charmander/6.png">','<img class="ibageTorre" src="../img/pokemon/charmander/7.png">','<img class="ibageTorre" src="../img/pokemon/charmander/8.png">','<img class="ibageTorre" src="../img/pokemon/charmander/9.png">'];
const squirtle = ['<img class="ibageTorre" src="../img/pokemon/squritle/1.png">','<img class="ibageTorre" src="../img/pokemon/squritle/2.png">','<img class="ibageTorre" src="../img/pokemon/squritle/3.png">','<img class="ibageTorre" src="../img/pokemon/squritle/4.png">','<img class="ibageTorre" src="../img/pokemon/squritle/5.png">','<img class="ibageTorre" src="../img/pokemon/squritle/6.png">','<img class="ibageTorre" src="../img/pokemon/squritle/7.png">','<img class="ibageTorre" src="../img/pokemon/squritle/8.png">','<img class="ibageTorre" src="../img/pokemon/squritle/9.png">'];

// Pokémon incial //

const in_bulb = ['<img class="ibage" src="../img/pokemon/bulbassaur/bulbassauro.png">','<img class="ibage" src="../img/pokemon/bulbassaur/ivysauro.png">','<img class="ibage" src="../img/pokemon/bulbassaur/venussauro.png">'];
const in_char = ['<img class="ibage" src="../img/pokemon/charmander/charmander.png">','<img class="ibage" src="../img/pokemon/charmander/charmeleon.png">','<img class="ibage" src="../img/pokemon/charmander/charizard.png">'];
const in_squir = ['<img class="ibage" src="../img/pokemon/squritle/squirtle.png">','<img class="ibage" src="../img/pokemon/squritle/wartortle.png">','<img class="ibage" src="../img/pokemon/squritle/blastoise.png">'];

// Status caminho //

let nivelTorre = 0;
let nome_ali = "";
let hp = 0;
let tipo = "";
let fraqueza = "";
let nivel = 1;


let nome_arq
let stt_bulb  = [[1,10],[3,45],[7,120]];
let stt_char  = [[3,6],[7,30],[12,80]];
let stt_squir  = [[2,8],[5,40],[10,100]];


// Caminho nome //

const bulbassauro_caminho = [0,1,2,3,4,5,6,7,8];
const charmander_caminho = [0,1,2,3,4,5,6,7,8];
const Squirtle_caminho = [0,1,2,3,4,5,6,7,8];



/* Linha evolutiva dos iniciais ----------------------------------------

const evolucao_bulbassauro = ["Bulbasaur", "Ivysaur", "Venusaur"];
const pkm_img_bulba_evolucao = ["001", "002", "003"];

const evolucao_charmander = ["Charmander", "Charmeleon", "Charizard"];
const pkm_img_charmander_evolucao = ["004", "005", "006"];

const evolucao_squirtle = ["Squirtle", "Wartortle", "Blastoise"];
const pkm_img_squirtle_evolucao = ["007", "008", "009"];

/*Linha evolutiva dos iniciais ----------------------------------------

/*Caminho de cada inicial ----------------------------------------
const caminho_bulbassauro = ["Caterpie","Pidgey","Vulpix","Paras","Mankey","Growlithe","Magmar","Moltres","Mewtwo"];
const pkm_img_bulbassauro = ["010", "016", "037", "046", "056", "058", "126", "146", "150"];
/*-------------------------
const caminho_charmander = ["Spearow","Sandshrew","Nidorina","Psyduck","Tentacruel","Golem","Lapras","Articuno","Mewtwo"];
const pkm_img_charmander = ["021", "027", "030", "054", "073", "076", "131", "144", "150"];
/*------------------------- 
const caminho_squirtle = ["Rattata","Ekans","Pikachu","Victreebel","Voltorb","Scyther","Electabuzz","Zapdos","Mewtwo"];
const pkm_img_squirtle = ["019", "023", "025", "071", "100", "123", "125", "145", "150"];

Caminho de cada inicial ---------------------------------------- */
