let choices = ["rock","paper","scissors"]

function ComputerChoice(choice){

    return choice[Math.floor(Math.random() * choice.length)];

}
function PlayerChoice(choice){
    choice = prompt("choose between 'rock','paper' and 'scissors': ")
    choice = choice.toLowerCase()
    return choice
}
function Playgame(pc_choice,player_choice){
    if (pc_choice == player_choice){
            return("it's a tie!")
        }
        else {
            if (pc_choice == "rock" && player_choice == "scissors") {
                pc_score = pc_score + 1
                return("Player: " + player_score + " and Pc: " + pc_score + ", You lose! Scissors beats Rock!")
            }
            else {
                if (pc_choice == "rock" && player_choice == "paper") {
                    player_score = player_score + 1
                    return("Player: " + player_score + " and Pc: " + pc_score + ", You win! Paper beats Rock!")
                }
                else {
                    if (player_choice == "rock" && pc_choice == "scissors") {
                        player_score = player_score + 1
                        return("Player: " + player_score + " and Pc: " + pc_score + ", You win! Rock beats Scissors!")
                    }
                    else {
                        if (player_choice == "rock" && pc_choice == "paper") {
                            pc_score = pc_score + 1
                            return("Player: " + player_score + " and Pc: " + pc_score + ", You lose! Paper beats Rock!")
                        }
                        else {
                            if (pc_choice == "paper" && player_choice == "scissors") {
                                player_score = player_score + 1
                                return("Player: " + player_score + " and Pc: " + pc_score + ", You win! Scissors beats Paper!")
                            }
                            else {
                                if (player_choice == "paper" && pc_choice == "scissors") {
                                    pc_score = pc_score + 1
                                    return("Player: " + player_score + " and Pc: " + pc_score + ", You lose! Scissors beats Paper!")
                                }          
                            }
                        }
                    }
                }
            }
    }

}


var pc_score = 0
var player_score = 0

for (i=1;i>0;i++){
    var pc_choice = ComputerChoice(choices)
    var player_choice = PlayerChoice(player_choice)
    console.log(Playgame(pc_choice,player_choice))
    if (pc_score == 5){
        alert("you lose!")
        break
    }
    else if (player_score == 5){
        alert("you win!")
        break
    }
}