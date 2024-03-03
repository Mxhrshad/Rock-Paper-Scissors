choice = ["rock", "paper", "scissors"]
function ComputerChoice(choice){
    return choice[Math.floor(Math.random() * choice.length)];
}
    const body = document.querySelector('body');

    body.style.display = "flex";
    body.style.alignItems = "center";
    body.style.justifyContent = "center";
    body.style.flexDirection = "column";
    body.style.backgroundColor = "black";
    const container = document.createElement('div');
    container.classList.add("container")
    body.appendChild(container)
    container.style.width = "750px";
    container.style.height = "750px";
    container.style.marginTop = "50px"  
    container.style.display = "flex"
    container.style.alignItems = "center";
    container.style.justifyContent = "center";
    container.style.flexDirection = "column";
    container.style.gap = "10px";
    const buttons = document.createElement("div");
    container.appendChild(buttons);
    buttons.style.width = "100%";
    buttons.style.height = "400px";
    buttons.style.display = "flex"
    buttons.style.alignItems = "center";
    buttons.style.backgroundColor = "#34373d";
    buttons.style.justifyContent = "space-between";
    buttons.style.borderRadius = "15px";
    const rock = document.querySelector('.rock');
    const paper = document.querySelector('.paper');
    const scissors = document.querySelector('.scissors');
    buttons.appendChild(rock);
    buttons.appendChild(paper);
    buttons.appendChild(scissors);
    rock.style.width = "100px";
    rock.style.height = "50px";
    rock.style.margin = "15px";
    rock.style.border = "none";
    rock.style.cursor = "pointer";   
    rock.style.borderRadius = "10px";
    paper.style.width = "100px";
    paper.style.height = "50px";
    paper.style.margin = "15px";
    paper.style.border = "none";   
    paper.style.cursor = "pointer";  
    paper.style.borderRadius = "10px";
    scissors.style.width = "100px";
    scissors.style.height = "50px";
    scissors.style.margin = "15px";
    scissors.style.border = "none";  
    scissors.style.cursor = "pointer";   
    scissors.style.borderRadius = "10px";
    const report = document.createElement("div");
    container.appendChild(report);
    report.style.width = "100%";
    report.style.height = "400px";
    report.style.backgroundColor = "#34373d";
    report.style.borderRadius = "15px";
    report.style.overflow = "auto";
    report.style.display = "flex"
    report.style.alignItems = "center";
    report.style.justifyContent = "top";
    report.style.flexDirection = "column";
    

    var pcScore = 0
    var playerScore = 0
    ComputerChoice(choice)
    rock.addEventListener('click', () => {
        if (ComputerChoice(choice) == "rock") {
            const roundResult = document.createElement('div');
            roundResult.classList.add('roundResult');
            roundResult.textContent = "It's a tie";
            report.appendChild(roundResult)
            roundResult.style.fontSize = "20px";
            roundResult.style.padding = "10px 0";
            const scores = document.createElement('div');
            scores.classList.add('scores');
            scores.textContent = "player: " + playerScore + " and Pc: " + pcScore;
            report.appendChild(scores)
            scores.style.fontWeight = "bolder";
        }
        else if (ComputerChoice(choice) == "paper") {
            const roundResult = document.createElement('div');
            roundResult.classList.add('roundResult');
            roundResult.textContent = "pc won this round! paper beats rock!";
            report.appendChild(roundResult)
            roundResult.style.fontSize = "20px";
            roundResult.style.padding = "10px 0";
            pcScore = pcScore + 1
            const scores = document.createElement('div');
            scores.classList.add('scores');
            scores.textContent = "player: " + playerScore + " and Pc: " + pcScore;
            report.appendChild(scores)
            scores.style.fontWeight = "bolder";
            if (pcScore >= 5) {
                const roundCount = document.createElement('div');
                roundCount.classList.add('roundCount');
                roundCount.textContent = "Game Over! Pc Won The Game!";
                report.appendChild(roundCount)
                playerScore = 0
                pcScore = 0
            }
            if (playerScore >= 5) {
                const roundCount = document.createElement('div');
                roundCount.classList.add('roundCount');
                roundCount.textContent = "Game Over! you Won The Game!";
                report.appendChild(roundCount)
                playerScore = 0
                pcScore = 0
            }
        }
        else if (ComputerChoice(choice) == "scissors") {
            const roundResult = document.createElement('div');
            roundResult.classList.add('roundResult');
            roundResult.textContent = "you won this round! rock beats scissors!";
            report.appendChild(roundResult)
            roundResult.style.fontSize = "20px";
            roundResult.style.padding = "10px 0";
            playerScore = playerScore + 1
            const scores = document.createElement('div');
            scores.classList.add('scores');
            scores.textContent = "player: " + playerScore + " and Pc: " + pcScore;
            report.appendChild(scores)
            scores.style.fontWeight = "bolder";
            if (pcScore >= 5) {
                const roundCount = document.createElement('div');
                roundCount.classList.add('roundCount');
                roundCount.textContent = "Game Over! Pc Won The Game!";
                report.appendChild(roundCount)
                playerScore = 0
                pcScore = 0
            }
            if (playerScore >= 5) {
                const roundCount = document.createElement('div');
                roundCount.classList.add('roundCount');
                roundCount.textContent = "Game Over! you Won The Game!";
                report.appendChild(roundCount)
                playerScore = 0
                pcScore = 0
            }
        }
    });

        paper.addEventListener('click', () => {
            if (ComputerChoice(choice) == "paper") {
                const roundResult = document.createElement('div');
                roundResult.classList.add('roundResult');
                roundResult.textContent = "It's a tie";
                report.appendChild(roundResult)
                roundResult.style.fontSize = "20px";
                roundResult.style.padding = "10px 0";
                const scores = document.createElement('div');
                scores.classList.add('scores');
                scores.textContent = "player: " + playerScore + " and Pc: " + pcScore;
                report.appendChild(scores)
                scores.style.fontWeight = "bolder";
            }
            else if (ComputerChoice(choice) == "rock") {
                const roundResult = document.createElement('div');
                roundResult.classList.add('roundResult');
                roundResult.textContent = "you won this round! paper beats rock!";
                report.appendChild(roundResult)
                roundResult.style.fontSize = "20px";
                roundResult.style.padding = "10px 0";
                playerScore = playerScore + 1
                const scores = document.createElement('div');
                scores.classList.add('scores');
                scores.textContent = "player: " + playerScore + " and Pc: " + pcScore;
                report.appendChild(scores)
                scores.style.fontWeight = "bolder";
                if (pcScore >= 5) {
                    const roundCount = document.createElement('div');
                    roundCount.classList.add('roundCount');
                    roundCount.textContent = "Game Over! Pc Won The Game!";
                    report.appendChild(roundCount)
                    playerScore = 0
                    pcScore = 0
                }
                if (playerScore >= 5) {
                    const roundCount = document.createElement('div');
                    roundCount.classList.add('roundCount');
                    roundCount.textContent = "Game Over! you Won The Game!";
                    report.appendChild(roundCount)
                    playerScore = 0
                    pcScore = 0
                }
            }
            else if (ComputerChoice(choice) == "scissors") {
                const roundResult = document.createElement('div');
                roundResult.classList.add('roundResult');
                roundResult.textContent = "pc won this round! scissors beat paper!";
                report.appendChild(roundResult)
                roundResult.style.fontSize = "20px";
                roundResult.style.padding = "10px 0";
                pcScore = pcScore + 1
                const scores = document.createElement('div');
                scores.classList.add('scores');
                scores.textContent = "player: " + playerScore + " and Pc: " + pcScore;
                report.appendChild(scores)
                scores.style.fontWeight = "bolder";
                if (pcScore >= 5) {
                    const roundCount = document.createElement('div');
                    roundCount.classList.add('roundCount');
                    roundCount.textContent = "Game Over! Pc Won The Game!";
                    report.appendChild(roundCount)
                    playerScore = 0
                    pcScore = 0
                }
                if (playerScore >= 5) {
                    const roundCount = document.createElement('div');
                    roundCount.classList.add('roundCount');
                    roundCount.textContent = "Game Over! you Won The Game!";
                    report.appendChild(roundCount)
                    playerScore = 0
                    pcScore = 0
                }
            }

      });

      scissors.addEventListener('click', () => {
        if (ComputerChoice(choice) == "scissors") {
            const roundResult = document.createElement('div');
            roundResult.classList.add('roundResult');
            roundResult.textContent = "It's a tie";
            report.appendChild(roundResult)
            roundResult.style.fontSize = "20px";
            roundResult.style.padding = "10px 0";
            const scores = document.createElement('div');
            scores.classList.add('scores');
            scores.textContent = "player: " + playerScore + " and Pc: " + pcScore;
            report.appendChild(scores)
            scores.style.fontWeight = "bolder";
        }
        else if (ComputerChoice(choice) == "rock") {
            const roundResult = document.createElement('div');
            roundResult.classList.add('roundResult');
            roundResult.textContent = "pc won this round! rock beats scissors!";
            report.appendChild(roundResult)
            roundResult.style.fontSize = "20px";
            roundResult.style.padding = "10px 0";
            pcScore = pcScore + 1
            const scores = document.createElement('div');
            scores.classList.add('scores');
            scores.textContent = "player: " + playerScore + " and Pc: " + pcScore;
            report.appendChild(scores)
            scores.style.fontWeight = "bolder";
            if (pcScore >= 5) {
                const roundCount = document.createElement('div');
                roundCount.classList.add('roundCount');
                roundCount.textContent = "Game Over! Pc Won The Game!";
                report.appendChild(roundCount)
                playerScore = 0
                pcScore = 0
            }
            if (playerScore >= 5) {
                const roundCount = document.createElement('div');
                roundCount.classList.add('roundCount');
                roundCount.textContent = "Game Over! you Won The Game!";
                report.appendChild(roundCount)
                playerScore = 0
                pcScore = 0
            }
        }
        else if (ComputerChoice(choice) == "paper") {
            const roundResult = document.createElement('div');
            roundResult.classList.add('roundResult');
            roundResult.textContent = "you won this round! scissors beat paper!";
            report.appendChild(roundResult)
            roundResult.style.fontSize = "20px";
            roundResult.style.padding = "10px 0";
            playerScore = playerScore + 1
            const scores = document.createElement('div');
            scores.classList.add('scores');
            scores.textContent = "player: " + playerScore + " and Pc: " + pcScore;
            report.appendChild(scores)
            scores.style.fontWeight = "bolder";
            if (pcScore >= 5) {
                const roundCount = document.createElement('div');
                roundCount.classList.add('roundCount');
                roundCount.textContent = "Game Over! Pc Won The Game!";
                report.appendChild(roundCount)
                playerScore = 0
                pcScore = 0
            }
            if (playerScore >= 5) {
                const roundCount = document.createElement('div');
                roundCount.classList.add('roundCount');
                roundCount.textContent = "Game Over! you Won The Game!";
                report.appendChild(roundCount)
                playerScore = 0
                pcScore = 0
            }
        }

});
