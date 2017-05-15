//Hangman Game

}

var nickNames = ['black mamba' 'king james''tmac''shaqtus''ticket' 'answer''truth''greek freek']
var guessLeft = 8;
var wrongGuess = [];
var score = 0;
var miss = 0;
var chosenWord ='';
var blanks = [];


function startGame() {
    guessLeft = 15;
    wrongGuess = [];
    blanks = [];
    chosenWord = nickNames[Math.floor((Math.random() * nickNames.length))];
    for(x = 0; x < chosenWord.length; x++) {
        blanks.push("_");
  

function checkLetters() {
    if(chosenWord.indexOf(userGuess) >= 0) {
        for(i = 0; i < chosenWord.length; i++) {
            if(userGuess === chosenWord[i]) {
                blanks.splice(i, 1, userGuess);
            }
        } //for
    } else {
        if(wrongGuess.indexOf(userGuess) >= 0 || !userGuess.match(/[a-z]/) || userGuess.length > 1) {
        } else {
            guessLeft--;
            wrongGuess.push(userGuess);
        }
    }
}


function play() {
    startGame();
    document.addEventListener("keypress", function(evt) {
        userGuess = evt.key.toLowerCase();
     
    });
}