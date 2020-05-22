let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget(){
	return Math.floor(Math.random()*10);
}

function compareGuesses(human, computer, secret){
	if(human === computer){
		return true;
	}else if (human >= secret){
		if(computer >= secret){
			return human-secret<computer-secret? true : false;
		}else{
			return human-secret<secret-computer? true : false;
		}
	}else{
		if(computer >= secret){
			return secret-human<computer-secret? true : false;
		}else{
			return secret-human<secret-computer? true : false;
		}
	}
}

function updateScore(winner){
	if(winner==='human'){
		humanScore++;
	}else{
		computerScore++;
	}
}

function advanceRound(){
	currentRoundNumber ++;
}