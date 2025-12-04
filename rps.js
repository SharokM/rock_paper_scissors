function rpsGame () {
    console.log("Welcome to Rock, Paper, Scissors!");
    const UserChoicePrompt = prompt("Enter your choice (rock, paper, scissors): ");
    const userChoice = UserChoicePrompt.toLowerCase();

    let computerChoice;
    const randomNumber = Math.floor(Math.random() * 3) +1;

    switch (randomNumber) {
        case 1: computerChoice = "rock"; break;
        case 2: computerChoice = "paper"; break;
        case 3: computerChoice = "scissors"; break;
    }
    console.log("Computer chose: " + computerChoice);

   if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper") 
){
        console.log("You win!");
    } else if (userChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (userChoice === "rock" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "scissors") ||
        (userChoice === "scissors" && computerChoice === "rock") 
    ) {
        console.log("You lose!");
    } else {
        console.log("Invalid choice. Please choose rock, paper, or scissors.");
    }
     
    }

rpsGame();