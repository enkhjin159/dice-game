var activePlayer;
var scores;
var roundScore;

var diceDom = document.querySelector(".dice");
startGame();
function startGame(){
        // toglogchiin eeljiig haruulah huwisagch
    activePlayer = 0;
    // toglogchiin tsugluulsan onooog hadgalah
    scores = [0 , 0];
    // toglogchiin eeljindee tsugluulj bga onoog hadgalah huwisagch
    roundScore = 0;
    // shoni nudiig hadgalah magadlalaar 1-6
    var diceNumber = Math.floor(Math.random() * 6) + 1;

    // program ehlehed
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.getElementById('name-0').textContent = 'Player 1'
    document.getElementById('name-1').textContent = 'Player 2'
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    document.querySelector('.player-0-panel').classList.add('active');

    diceDom.style.display = "none";
}

            // Shoog shideh eventListener
document.querySelector(".btn-roll").addEventListener("click", function (){
            // 1-6 random too gargaj awah
var diceNumber = Math.floor(Math.random() * 6) + 1;
                // shoonii zurgiig webd oorchilj oruulna
diceDom.style.display = "block";
diceDom.src ='dice-' + diceNumber + '.png';
            // toglogchiin eeljiin onoog oorchilno.
if(diceNumber !== 1 ){
                // -1s ylgaatai too buula. onoog nemnee
        roundScore = roundScore + diceNumber;
        document.getElementById('current-' + activePlayer).textContent = roundScore
    }   
    else{eeljSolih();
        
    }
});
    // Hold towchiig ajilluulnaa
    document.querySelector(".btn-hold").addEventListener("click", function(){
            //tsugluulsan onoog niit global onoondeer nemnee
    scores[activePlayer] = scores[activePlayer] + roundScore;
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer]
            // hojson esehiig shalgah
    if(scores[activePlayer] >= 100){
        document.getElementById('name-' + activePlayer).textContent = 'Winnerrrr';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
    }
    else{
            // eeljiin onoog 0 bolgonooo
            // toglogchiin eeljindee tsugluulsan onoog 0-leh
        eeljSolih();
    }
            
    
});
function eeljSolih(){
    roundScore = 0;
    document.getElementById('current-' + activePlayer).textContent = 0;

             // 1 buusan bolhoor erh shiljine
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
             // ulaan tseg shiljuulne
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

              // eelj soligdohod shoog alga bolgoonoo
    diceDom.style.display = "none";
}

    document.querySelector(".btn-new").addEventListener("click", startGame);

