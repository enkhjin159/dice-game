// toglogchiin eeljiig haruulah huwisagch

var activePlayer = 1;

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
document.querySelector(".btn-roll").addEventListener("click", function (){
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    
    diceDom.style.display = "block";
    diceDom.src ='dice-' + diceNumber + '.png';

});

