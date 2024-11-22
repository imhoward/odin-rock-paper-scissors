function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

function getComputerChoice() {
    let compChoice = getRandomIntInclusive(1, 3);

    if (compChoice == 1) {
        return "Rock";
    }
    else if (compChoice == 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Enter your choice: ");

    if (humanChoice.toLowerCase() == "rock") {
        return "Rock";
    }
    else if (humanChoice.toLowerCase() == "paper") {
        return "Paper";
    } 
    else if (humanChoice.toLowerCase() == "scissors") {
        return "Scissors";
    } else {
        return "Error";
    }
}

function playRound(humanChoice, compChoice) {

    console.log("The Computer chose: " + compChoice);
    if (compChoice == "Rock" && humanChoice == "Paper") {
        console.log("You win! Paper beats rock!");
        return 1;
    } 

    else if (compChoice == "Paper" && humanChoice == "Scissors") {
        console.log("You win! Scissors beats paper!");
        return 1;
    }

    else if (compChoice == "Scissors" && humanChoice == "Rock") {
        console.log("You win! Rock beats Scissors!");
        return 1;
    } 

    else if (compChoice == humanChoice) {
        console.log("It's a tie! No points!");
        return 2;
    }
    
    else {
        console.log("You lose! " + compChoice + " beats " + humanChoice + "!");
        return 0;
    }
}

function playGame() {
    let compScore = 0;
    let humanScore = 0;
    let rounds = 5;
    let roundResult;
    let humanChoice;
    let compChoice;
    let rockBtn = document.querySelector(".rock");
    let paperBtn = document.querySelector(".paper");
    let scissorsBtn = document.querySelector(".scissors");
    let h2 = document.querySelector("h2");

    rockBtn.addEventListener('click', function(e) {
        compChoice = getComputerChoice();
        roundResult = playRound("Rock", compChoice);
        if (roundResult == 0) {
            compScore += 1;
        }
        else if (roundResult == 1) {
            humanScore += 1;
        }

        h2.textContent = "You: " + humanScore + " | Computer: " + compScore;

        if (humanScore == 5 || compScore == 5) {
            if (humanScore > compScore) {
                /*
                console.log("Congratulations! You won the game!");
                console.log("You won with a score of " + humanScore);
                */
               h2.textContent = "Congratulations! You won the game!" + " You won with a score of " + humanScore;
            }
            else if (compScore > humanScore) {
                /*
                console.log("Sorry, you lost. Better luck next time.");
                console.log("You lost with a score of " + humanScore);
                */
               h2.textContent = "Sorry, you lost. Better luck next time." + " You lost with a score of " + humanScore;
            }
        }
    });

    paperBtn.addEventListener('click', function(e) {
        compChoice = getComputerChoice();
        roundResult = playRound("Paper", compChoice);
        if (roundResult == 0) {
            compScore += 1;
        }
        else if (roundResult == 1) {
            humanScore += 1;
        }

        h2.textContent = "You: " + humanScore + " | Computer: " + compScore;

        if (humanScore == 5 || compScore == 5) {
            if (humanScore > compScore) {
               h2.textContent = "Congratulations! You won the game!" + " You won with a score of " + humanScore;
            }
            else if (compScore > humanScore) {
               h2.textContent = "Sorry, you lost. Better luck next time." + " You lost with a score of " + humanScore;
            }
        }
    });

    scissorsBtn.addEventListener('click', function(e) {
        compChoice = getComputerChoice();
        roundResult = playRound("Scissors", compChoice);
        if (roundResult == 0) {
            compScore += 1;
        }
        else if (roundResult == 1) {
            humanScore += 1;
        }

        h2.textContent = "You: " + humanScore + " | Computer: " + compScore;

        if (humanScore == 5 || compScore == 5) {
            if (humanScore > compScore) {
               h2.textContent = "Congratulations! You won the game!" + " You won with a score of " + humanScore;
            }
            else if (compScore > humanScore) {
               h2.textContent = "Sorry, you lost. Better luck next time." + " You lost with a score of " + humanScore;
            }
        }
    });

    /*
    while (rounds > 0) {
        compChoice = getComputerChoice();
        //roundResult = playRound(humanChoice, compChoice);


        if (roundResult == 0) {
            compScore += 1;
        }
        else if (roundResult == 1) {
            humanScore += 1;
        }
        rounds -= 1;
    }
        */

    rockBtn.removeEventListener('click', function(e) {});
    paperBtn.removeEventListener('click', function(e) {});
    scissorsBtn.removeEventListener('click', function(e) {});


    if (humanScore > compScore) {
        console.log("Congratulations! You won the game!");
        console.log("You won with a score of " + humanScore);
    }
    else if (compScore > humanScore) {
        console.log("Sorry, you lost. Better luck next time.");
        console.log("You lost with a score of " + humanScore);
    }
        
}

playGame();

