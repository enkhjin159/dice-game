// toglogchiin eeljiig haruulah huwisagch

var activePlayer = 1;

// toglogchiin tsugluulsan onooog hadgalah

var scores = [0 , 0];



// toglogchiin eeljindee tsugluulj bga onoog hadgalah huwisagch

var roundScore = 0;

// shoni nudiig hadgalah magadlalaar 1-6
var dice =Math.floor(Math.random() * 6) + 1;

// document.querySelector('#score-0').textContent = dice;

// document.querySelector('#score-1').innerHTML = "<em>Yes!</em>";

// program ehlehed
document.querySelector('#score-0').textContent = 0;
document.querySelector('#score-1').textContent = 0;

document.querySelector('#current-0').textContent = 0;
document.querySelector('#current-1').textContent = 0;

document.querySelector(".dice").style.display = "none";


console.log("shoo :" + dice);