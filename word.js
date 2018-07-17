function Word(){
    this.avalibleWords = ["pink", "green", "blue"];
    this.choosenWord = this.avalibleWords[Math.floor(Math.random() * this.avalibleWords.length)];
    this.clonedWord = this.choosenWord;
    this.underScoreWord = this.clonedWord.split("").fill("_ ").join(",");
    this.wordArray = this.clonedWord.split("");
    this.checkLetter = function(chosenLetter){
        for (var i = 0; i < this.wordArray.length; i++){
            if(this.wordArray[i] == chosenLetter) {
                console.log("that letter is in the word")
               this.underScoreWord[i] = chosenLetter
                console.log(this.underScoreWord)
                console.log(this.chosenLetter)
                    
                
            }
         }
    }

}

module.exports = Word