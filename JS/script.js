const result = document.querySelector('.result');
const myScore = document.querySelector('#my-score');
const machineScore = document.querySelector('#machine-score');

let myScoreNumber = 0;
let machineScoreNumber = 0;

const img = document.createElement("img");
const text = document.createElement("p");

// Cria o overlay de vitória/derrota
const overlay = document.createElement('div');
overlay.classList.add('overlay');
overlay.style.display = 'none';
overlay.style.position = 'fixed';
overlay.style.top = '0';
overlay.style.left = '0';
overlay.style.width = '100vw';
overlay.style.height = '100vh';
overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
overlay.style.zIndex = '9999';
overlay.style.justifyContent = 'center';
overlay.style.alignItems = 'center';
overlay.style.flexDirection = 'column';
overlay.style.padding = '20px';
document.body.appendChild(overlay);

// Elementos dentro do overlay
const overlayImg = document.createElement('img');
overlayImg.style.width = '70%';
overlayImg.style.maxWidth = '500px';

const overlayText = document.createElement('p'); 
overlayText.style.color = 'white';
overlayText.style.fontSize = '2rem';
overlayText.style.marginTop = '20px';
overlayText.style.textAlign = 'center';

const buttonContainer = document.createElement('div');
buttonContainer.style.marginTop = '20px';
buttonContainer.style.display = 'flex';
buttonContainer.style.gap = '10px';

const closeButton = document.createElement('button');
closeButton.textContent = 'Fechar';
closeButton.style.padding = '10px 20px';
closeButton.style.fontSize = '16px';

const restartButton = document.createElement('button');
restartButton.textContent = 'Novo Jogo';
restartButton.style.padding = '10px 20px';
restartButton.style.fontSize = '16px';

// Adiciona botões ao container e container ao overlay
buttonContainer.appendChild(closeButton);
buttonContainer.appendChild(restartButton);
overlay.appendChild(overlayImg);
overlay.appendChild(overlayText); 
overlay.appendChild(buttonContainer);

// Função para fechar o overlay
closeButton.addEventListener('click', () => {
    overlay.style.display = 'none';
});

// Função para reiniciar o jogo
restartButton.addEventListener('click', () => {
    overlay.style.display = 'none';
    myScoreNumber = 0;
    machineScoreNumber = 0;
    myScore.innerHTML = myScoreNumber;
    machineScore.innerHTML = machineScoreNumber;
    result.innerHTML = "";
});

const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine());
}

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3); //Math.floor - Arredonda pra baixo

    return choices[randomNumber];
}

const playTheGame = (human, machine) => {
    console.log('Humano: ' + human + ' Maquina: ' + machine)

    if (human === machine) {
        img.src = "./img/empate.gif";
        text.textContent = "EMPATE! JOGUE NOVAMENTE";
        result.innerHTML = "";  
        result.appendChild(img);
        result.appendChild(text);
    } else if ((human === 'paper' && machine === 'rock') ||
        (human === 'rock' && machine === 'scissors') ||
        (human === 'scissors' && machine === 'paper')
    ) {
        myScoreNumber++;
        myScore.innerHTML = myScoreNumber;
        img.src = "./img/vitoria.gif";
        text.textContent = "VITÓRIA!";
        result.innerHTML = "";  
        result.appendChild(img);
        result.appendChild(text);
    } else {
        machineScoreNumber++;
        machineScore.innerHTML = machineScoreNumber;
        img.src = "./img/derrota.gif";
        text.textContent = "VOCÊ PERDEU KKKKK";
        result.innerHTML = "";  
        result.appendChild(img);
        result.appendChild(text);
    }

    checkGameOver();
}

// Verifica se alguém chegou a 5 pontos
const checkGameOver = () => {
    if (myScoreNumber >= 5) {
        showOverlay('./img/vitoria.gif', "VOCÊ VENCEU!");
    } else if (machineScoreNumber >= 5) {
        showOverlay('./img/derrota.gif', "PERDEDOOOOORRR!!!!"); 
    }
}

// Exibe o overlay com a imagem e texto passados
const showOverlay = (imgSrc, message) => {
    overlayImg.src = imgSrc;
    overlayText.textContent = message;
    overlay.style.display = 'flex';
}
