var Word = require('./word.js')


var guessSoFar = []
var currentDisplay = []
var guessesLeft = 10

var letterInWord = false;

function Letter(letter){
	var newWord = new Word()
	this.letter = letter

	//displays letters as '_'
	this.letterDisplay = function(){
		for (var i = 0; i < newWord.wordBlank; i++){
			currentDisplay.push(" _ ")
		}
		console.log(currentDisplay)
		// console.log(newWord.wordOption)
	}

	//compares user input to letters in current word option
	this.letterCompare = function(letter){

		for (var i = 0; i < newWord.wordBlank; i++){
			
			if (letter===newWord.wordOption[i]){
				letterInWord = true;
			}
			console.log(letterInWord)
		}

		if (letterInWord){
			for (var j = 0; j < this.wordBlank; j++){
				if (this.wordString[j]===letter){
					currentDisplay[j] = letter;
					console.log(letter)	
				}
				
			}	
			console.log(currentDisplay[j])
			return 
		}
		
		else{
			guessesLeft--
			console.log("Guesses Remaining: " + guessesLeft)
			return 
		}
		
	}

}


module.exports = Letter;