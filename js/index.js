function tutorial(){
    document.getElementById("texto").innerHTML = (`
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
        Ao chegar no final da torre, você se deparará com o PODEROSO <span style="background-color: black; color:white;">!@#$%!</span> o Chefe FINAL da torre!! Boa sorte.<br>`);
};

function escolher(botao){
    if(botao.id == "bulb"){
        caminho = bulbassauro;
        caminho_nome = caminho_bulbassauro;
        escolha = in_bulb;
        escolha_nome = evolucao_bulbassauro;
        tipos_adv = tip_bulb;

        nome_arq = "bulbassaur"
    }else if(botao.id == "char"){
        caminho = charmander;
        caminho_nome = caminho_charmander;
        escolha = in_char;
        escolha_nome = evolucao_charmander;
        tipos_adv = tip_char;

        nome_arq = "charmander"
    }else{
        caminho = squirtle;
        caminho_nome = caminho_squirtle;
        escolha = in_squir;
        escolha_nome = evolucao_squirtle
        tipos_adv = tip_squir;

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
    }else if(nivel >3 && nivel <= 7){
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
    let text = '<img class="ibage" src="../img/pokemon/' + nome_arq +'/' + (nivelTorre +1) +'.png">';

    document.getElementById("pkm_adv").innerHTML = text;
    document.getElementById("nome_adv").innerHTML = caminho_nome[nivelTorre];
};

//=================================================================================//


// Escolha e definição de caminho //

let caminho = [];
let caminho_nome = [];
let escolha = [];
let escolha_nome = [];
let tipos_adv = [];
let nome_arq;

// status predefinidos //

let status = [];
let stt_bulb  = [[1,10],[3,45],[7,121]];
let stt_char  = [[3,7],[7,30],[12,102]];
let stt_squir  = [[2,9],[5,40],[10,113]];

let stts_caminho_bulb = [[1,6],[1,7],[2,4],[4,15],[5,23],[5,30],[6,35],[10,74],[12,90]];
let stts_caminho_char = [[1,7],[2,4],[1,10],[3,20],[4,45],[4,50],[5,42],[9,82],[10,115]];
let stts_caminho_squir = [[2,5],[1,7],[2,7],[3,17],[4,35],[5,35],[5,40],[10,80],[11,100]];

// Status caminho //

let hp = 0;
let nivel = 1;
let nome_ali = "";
let nivelTorre = 0;


// Caminho imagem //

const bulbassauro = ['<img class="ibageTorre" src="../img/pokemon/bulbassaur/1.png">','<img class="ibageTorre" src="../img/pokemon/bulbassaur/2.png">','<img class="ibageTorre" src="../img/pokemon/bulbassaur/3.png">','<img class="ibageTorre" src="../img/pokemon/bulbassaur/4.png">','<img class="ibageTorre" src="../img/pokemon/bulbassaur/5.png">','<img class="ibageTorre" src="../img/pokemon/bulbassaur/6.png">','<img class="ibageTorre" src="../img/pokemon/bulbassaur/7.png">','<img class="ibageTorre" src="../img/pokemon/bulbassaur/8.png">','<img class="ibageTorre" src="../img/pokemon/bulbassaur/9.png">'];
const charmander = ['<img class="ibageTorre" src="../img/pokemon/charmander/1.png">','<img class="ibageTorre" src="../img/pokemon/charmander/2.png">','<img class="ibageTorre" src="../img/pokemon/charmander/3.png">','<img class="ibageTorre" src="../img/pokemon/charmander/4.png">','<img class="ibageTorre" src="../img/pokemon/charmander/5.png">','<img class="ibageTorre" src="../img/pokemon/charmander/6.png">','<img class="ibageTorre" src="../img/pokemon/charmander/7.png">','<img class="ibageTorre" src="../img/pokemon/charmander/8.png">','<img class="ibageTorre" src="../img/pokemon/charmander/9.png">'];
const squirtle = ['<img class="ibageTorre" src="../img/pokemon/squritle/1.png">','<img class="ibageTorre" src="../img/pokemon/squritle/2.png">','<img class="ibageTorre" src="../img/pokemon/squritle/3.png">','<img class="ibageTorre" src="../img/pokemon/squritle/4.png">','<img class="ibageTorre" src="../img/pokemon/squritle/5.png">','<img class="ibageTorre" src="../img/pokemon/squritle/6.png">','<img class="ibageTorre" src="../img/pokemon/squritle/7.png">','<img class="ibageTorre" src="../img/pokemon/squritle/8.png">','<img class="ibageTorre" src="../img/pokemon/squritle/9.png">'];

// Pokémon incial //

const in_bulb = ['<img class="ibage" src="../img/pokemon/bulbassaur/bulbassauro.png">','<img class="ibage" src="../img/pokemon/bulbassaur/ivysauro.png">','<img class="ibage" src="../img/pokemon/bulbassaur/venussauro.png">'];
const in_char = ['<img class="ibage" src="../img/pokemon/charmander/charmander.png">','<img class="ibage" src="../img/pokemon/charmander/charmeleon.png">','<img class="ibage" src="../img/pokemon/charmander/charizard.png">'];
const in_squir = ['<img class="ibage" src="../img/pokemon/squritle/squirtle.png">','<img class="ibage" src="../img/pokemon/squritle/wartortle.png">','<img class="ibage" src="../img/pokemon/squritle/blastoise.png">'];

// Caminho nome //

const bulbassauro_caminho = [0,1,2,3,4,5,6,7,8];
const charmander_caminho = [0,1,2,3,4,5,6,7,8];
const Squirtle_caminho = [0,1,2,3,4,5,6,7,8];

// Nomes pokémon //


const evolucao_bulbassauro = ["Bulbasaur", "Ivysaur", "Venusaur"];
const evolucao_charmander = ["Charmander", "Charmeleon", "Charizard"];
const evolucao_squirtle = ["Squirtle", "Wartortle", "Blastoise"];

// Nomes pokémon caminhos //

const caminho_bulbassauro = ["Caterpie","Pidgey","Vulpix","Paras","Mankey","Growlithe","Magmar","Moltres","Mewtwo"];
const caminho_charmander = ["Spearow","Sandshrew","Nidorina","Psyduck","Tentacruel","Golem","Lapras","Articuno","Mewtwo"];
const caminho_squirtle = ["Rattata","Ekans","Pikachu","Victreebel","Voltorb","Scyther","Electabuzz","Zapdos","Mewtwo"];

// tipagem caminhos //

const tip_bulb = [["inseto"],["normal","voador"],["fogo"],["inseto","venenoso"],["lutador"],["fogo"],["fogo"],["fogo","voador"],["psiquico"]];
const tip_char = [["normal","voador"],["terra"],["venenoso"],["agua"],["agua","venenoso"],["terra","pedra"],["agua","gelo"],["gelo","voador"],["psiquico"]];
const tip_squir = [["normal"],["venenoso"],["eletrico"],["planta","venenoso"],["eletrico"],["inseto","voador"],["eletrico"],["eletrico","voador"],["psiquico"]];
