// document.body.style.backgroundImage = "url('img/fundo-inicial.png')"; // Fundo inicial padrão

const result = document.querySelector('.result');
const myScore = document.querySelector('#my-score');
const machineScore = document.querySelector('#machine-score');

let myScoreNumber = 0;
let machineScoreNumber = 0;


const img = document.createElement("img");
const text = document.createElement("p");


const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3); //Math.floor - Arredonda pra baixo

    return choices[randomNumber];
}


const playTheGame = (human, machine) => {

    console.log('Humano: ' + human + ' Maquina: ' + machine)

    if (human === machine) {
        img.src = "./img/empate.gif"
        text.textContent = "EMPATE! JOGUE NOVAMENTE";
        result.innerHTML = "";  
        result.appendChild(img);
        result.appendChild(text);

    } else if ((human === 'paper' && machine === 'rock') ||
        (human === 'rock' && machine === 'scissors') ||
        (human === 'scissors' && machine === 'paper')
    ) {
        myScoreNumber++
        myScore.innerHTML = myScoreNumber
        img.src = "./img/vitoria.gif"
        text.textContent = "VITÓRIA!";
        result.innerHTML = "";  
        result.appendChild(img);
        result.appendChild(text);
    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        img.src = "./img/derrota.gif"
        text.textContent = "VOCÊ PERDEU KKKKK";
        result.innerHTML = "";  
        result.appendChild(img);
        result.appendChild(text);
    }
}