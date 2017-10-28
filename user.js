var inquirer = require('inquirer')
var Letter = require('./letter.js')

var newLetter = new Letter()

function open(){	
	newLetter.letterDisplay()
}


 function round(){

	inquirer
		.prompt({
			name: "letter",
			type: "input",
			message: "Guess a letter!",
			// validate: function(input){
			// 	var done = this.async();
			// 	if (typeof input === 'number'){
			// 		done('Sorry, letter\'s only');
			// 		return;
			// 	}
			// 	done(null, true)
			// }
		})
		.then(function(answer){
			console.log("Guess: " + answer.letter)
			newLetter.letterCompare(answer.letter)	
		})
	
}

open()
round()

