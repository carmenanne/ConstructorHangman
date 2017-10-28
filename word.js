var promptArray = require('./hangman.js')

function Word(){

	//grabs word from array at random
	this.wordOption = promptArray[Math.floor(Math.random()*promptArray.length)];
	
	//splits word into string
	this.wordString = this.wordOption.split("")

	this.wordBlank = this.wordString.length;
	
	// console.log(this.wordOption)
}


module.exports = Word;



