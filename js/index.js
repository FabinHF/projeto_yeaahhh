function tutorial(){
    document.getElementById("texto").innerHTML = (`

        PokeTower é uma fangame da franquia Pokémon com toques e elementos da franquia de Mortal Kombat.<br><br>
        O objetivo do jogo é você conseguir levar o seu pokémon inicial até o topo da torre superando seus desafios.<br><br>

        
        Você se vê diante de um grande desafio<br>
        Você é movido por fome de luta e poder.<br>
        Suba na torre e conquiste cada andar!<br>
        Siga sem medo pelo caminho do mestre pokémon!<br><br>
        
        O jogo conta com mecânicas de evolução e combate por turnos como;<br>
        - Ataque (Você dá um dano básico em seu oponente)<br>
        - Defesa (Você reduz o dano do próximo ataque do oponente)<br>
        - Carregar (Você aumenta o dano do seu próximo ataque, você pode acumular até 3 cargas mas lembre-se que você ficará vulnerável!!)<br><br>
        
        Há também um caminho pré-definido de inimigos dependendo do pokémon inicial escolhido. Seu inicial enfrentará seus adversários sozinhos<br>
        mas ele tem um enorme potencial de crescimento e evolução.<br>
        Não se esqueça também de que o próximo pokémon de cada andar sempre será mais forte!!<br>
        Ao chegar no final da torre, você se deparará com o PODEROSO !@#$%! o Chefe FINAL da torre!! Boa sorte.<br>
    
    `);
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

let bulbassauro = ["../img/pokemon/bulbassauro","../img/pokemon/bulbasasuro","../img/pokemon/bulbasasuro","../img/pokemon/bulbasasuro","../img/pokemon/bulbasasuro","../img/pokemon/bulbasasuro","../img/pokemon/bulbasasuro","../img/pokemon/bulbasasuro","../img/pokemon/bulbasasuro","../img/pokemon"];
let charmander = ["../img/pokemon/charmander","../img/pokemon/charmander","../img/pokemon/charmander","../img/pokemon/charmander","../img/pokemon/charmander","../img/pokemon/charmander","../img/pokemon/charmander","../img/pokemon/charmander","../img/pokemon/charmander","../img/pokemon/charmander"];
let squirtle = ["../img/pokemon/squirtle","../img/pokemon/squirtle","../img/pokemon/squirtle","../img/pokemon/squirtle","../img/pokemon/squirtle","../img/pokemon/squirtle","../img/pokemon/squirtle","../img/pokemon/squirtle","../img/pokemon/squirtle","../img/pokemon/squirtle"];

let caminho = [];