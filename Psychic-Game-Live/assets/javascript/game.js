


// declare scoring global variables initial state

var wins = 0;
var losses = 0;
var guessesLeft = 9;

// gameplay loop


// declare guessed letters array
var guessesSoFar =[];

// cpu choose random letter of the alphabet

var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var cpuGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log("computerguess: " + cpuGuess);
// create onkeyup event for userGuess

// declare function gameOver to reset game (leaving wins & losses alone)

function gameOver() {
    guessesLeft =9;

    cpuGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log("computerguess: " + cpuGuess);

    guessesSoFar = [];
    
    }

document.onkeyup = function(event) {
    var userGuess = event.key;

    // convert useGuess to lowercase

    var userGuessLower = userGuess.toLowerCase();


    // if userGuess is correct than wins +1, guessesLeft reset

    if (userGuessLower === cpuGuess) {
        wins = wins +1;
        gameOver();
        masterloop = 1;
        }
    // if userGuess is incorrect than guessesLeft -1
    else {
        guessesLeft = guessesLeft -1;
        };

    // if guessesLeft < 1 than losses +1
    if (guessesLeft < 1) {
        losses = losses +1;
        gameOver();
        };


    // print scoreboard to text

        //  html elements
        //<p id="wins-text"></p>
        //<p id="losses-text"></p>
        //<p id="guessesLeft-text"></p>
        //<p id="guessesSoFar-text"></p>
    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var guessesLeftText = document.getElementById("guessesLeft-text");

    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessesLeftText.textContent = "Guesses Left: " + guessesLeft;


    // push userGuess to guessesSoFar array

    var guessesSoFarText = document.getElementById("guessesSoFar-text");

    guessesSoFar.push(userGuessLower);

    guessesSoFarText.textContent = "Guesses So Far: " + guessesSoFar;

};

//  somehow I still need to create a loop that resets the cpuGuess and guessesSoFar array
