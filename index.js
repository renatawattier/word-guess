var Word = require("./word.js")
var inquirer = require("inquirer");
var wins = 0;
var losses = 0;
var guessesRemaining = 10;
var userGuesses = "";
var guessedList = [];
var word = new Word
// console.log(word)
// console.log(word.underScoreWord)
// console.log("choosen word" + word.choosenWord)
function guessLetter (){
    inquirer.prompt([
        {
            name: "letter",
            type: "input",
            message: "Choose a letter:",
        }
    ])
    .then(function (answers){
        // console.log("you chose the letter  " + answers.letter)
        guessesRemaining--
        // console.log("you have "  +   guessesRemaining + " guesses remaining")
        // console.log(word.underScoreWord)
        word.checkLetter(answers.letter)
        if (guessesRemaining > 0){
            guessLetter()
        }
    })
};

guessLetter();


