let saveArr;
saveArr = JSON.parse(localStorage.getItem('score'));

let win = saveArr[0];
let lose = saveArr[1];
let tie = saveArr[2];
console.log(saveArr)
if (saveArr === null) {
  win = 0;
  lose = 0;
  tie = 0;
}

let autoMove;
let compMove;
let result;
let resultDisplay = document.querySelector('.result-t');
let scoreDisplay = document.querySelector('.score-f');
let displayMove = document.querySelector('.you-t');
let clickRock = document.querySelector('.rock-img');
let clickPaper = document.querySelector('.paper-img');
let clickScissor = document.querySelector('.scissor-img');
let clickReset = document.querySelector('.reset-click');
let clickAuto = document.querySelector('.click-auto');
let typeBody = document.querySelector('.body-page');

typeBody.addEventListener('keydown', () => {
  if (event.key === 'r') {
    playGame('rock');
  } else if (event.key === 'p') {
    playGame('paper');
  } else if (event.key === 's') {
    playGame('scissor');
  } else if (event.key === 'Backspace') {
    resetScore();
  }
  console.log(event.key)
})
clickRock.addEventListener('click', () => { playGame('rock') })

clickPaper.addEventListener('click', () => {
  playGame('paper')
})
clickScissor.addEventListener('scissor', () => {
  playGame('scissor')
})
clickReset.addEventListener('click', () => {
  resetScore();
})
clickAuto.addEventListener('click', () => {
  autoPlay();
})


function resetScore() {
  win = 0;
  lose = 0;
  tie = 0;
  scoreDisplay.innerHTML = `Win: ${win}, Lose: 
        ${lose}, Tie: ${tie}`;

  scoreDisplayText();
}

function playGame(pick) {

  autoMove = compRand();
  if (pick === 'auto') {
    pick = autoMove;
  }
  compRand();
  if (pick === 'rock') {

    if (compMove === 'rock') {
      result = 'u tie';
    } else if (compMove === 'paper') {
      result = 'u lose';
    } else {
      result = 'u win';
    }
  } else if (pick === 'paper') {
    if (compMove === 'rock') {
      result = 'u win';
    } else if (compMove === 'paper') {
      result = 'u tie';
    } else {
      result = 'u lose';
    }
  } else if (pick === 'scissor') {
    if (compMove === 'rock') {
      result = 'u lose';
    } else if (compMove === 'paper') {
      result = 'u win';
    } else {
      result = 'u tie';
    }
  }





  checkWin();
  resultDisplay.innerHTML = result;
  displayMove.innerHTML = `You
    <img class="r-img1" src="/pictures/${pick}-emoji.png">
    <img class="r-img1" src="/pictures/${compMove}-emoji.png">
    Computer`;

  scoreDisplayText();
  localStorage.setItem('score', JSON.stringify([win, lose, tie]));
}


function scoreDisplayText() {
  scoreDisplay.innerHTML = `Win: ${win},Lose: 
      ${lose}, Tie: ${tie}`;
  localStorage.setItem('score', JSON.stringify([win, lose, tie]));
}

scoreDisplayText();

function resultDisplaytext() {
  if (result === 'u win') {

  }
}
function compRand() {
  let random = Math.random();

  if (random < 1 / 3) {
    compMove = 'rock';
  } else if (random < 2 / 3) {
    compMove = 'paper';
  } else {
    compMove = 'scissor';
  }
  return e = compMove;
}
function checkWin() {
  if (result === 'u win') {
    win++;

  } else if (result === 'u lose') {
    lose++;

  } else if (result === 'u tie') {
    tie++;
  }
}

let isAutoPlaying = false;
function autoPlay() {
  let autoDisplay = document.querySelector('.auto');

  if (!isAutoPlaying) {

    inter = setInterval(() => { playGame('auto') }, 1000);
    autoDisplay.innerHTML = 'Stop Auto';
    console.log(inter);
    isAutoPlaying = true;
  } else {
    clearInterval(inter);
    autoDisplay.innerHTML = 'Auto Play';

    isAutoPlaying = false;

  }
}

