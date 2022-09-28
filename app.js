            // toglogchiin eeljiig haruulah huwisagch

var activePlayer = 0;

            // toglogchiin tsugluulsan onooog hadgalah

var scores = [0 , 0];



            // toglogchiin eeljindee tsugluulj bga onoog hadgalah huwisagch

var roundScore = 0;

            // shoni nudiig hadgalah magadlalaar 1-6
var diceNumber = Math.floor(Math.random() * 6) + 1;


            // program ehlehed
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

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
    }else{
                // toglogchiin eeljindee tsugluulsan onoog 0-leh
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
});

