let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreboard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function convertToWord(letter) {
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    if(letter === "s") return "Scissor";
}

function win(user, comp) {
    const smallUserWord = "user".fontsize(2).sub();
    const smallComputerWord = "comp".fontsize(2).sub();
    const userChoice_div = document.getElementById(user);
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `${convertToWord(user)}${smallUserWord} beats ${convertToWord(comp)}${smallComputerWord}. You win! 🔥`;
    userChoice_div.classList.add('green-glow');
    // ES6
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 300)
}

function lose(user, comp) {
    const smallUserWord = "user".fontsize(2).sub();
    const smallComputerWord = "comp".fontsize(2).sub();
    const userChoice_div = document.getElementById(user);
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `${convertToWord(user)}${smallUserWord} loses to ${convertToWord(comp)}${smallComputerWord}. You lose... 🤡`;
    userChoice_div.classList.add('red-glow');
    // ES5
    setTimeout(function() { userChoice_div.classList.remove('red-glow')}, 300)
}

function draw(user, comp) {
    const smallUserWord = "user".fontsize(2).sub();
    const smallComputerWord = "comp".fontsize(2).sub();
    const userChoice_div = document.getElementById(user);
    result_p.innerHTML = `${convertToWord(user)}${smallUserWord} equals ${convertToWord(comp)}${smallComputerWord}. Draw... 💩`;
    userChoice_div.classList.add('grey-glow');
    setTimeout(function() { userChoice_div.classList.remove('grey-glow')}, 300)
}

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    return choices[Math.floor(Math.random() * 3)];
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function main(){
    rock_div.addEventListener('click', function() {
        game("r");
    })

    paper_div.addEventListener('click', function() {
        game("p");
    })

    scissors_div.addEventListener('click', function() {
        game("s");
    })
}

main();