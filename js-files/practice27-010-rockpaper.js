

    let compMove;
    let result;
    let resultDisplay = document.querySelector('.result-t');
    let scoreDisplay = document.querySelector('.score-f');
    let win = 0;
    let lose = 0;
    let tie = 0;
    let displayMove = document.querySelector('.you-t');


    function playGame(pick) {

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
      } else {
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

      scoreDisplay.innerHTML = `Win: ${win},Lose: 
      ${lose}, Tie: ${tie}`;

    }

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
    }
    function checkWin() {
      if (result === 'u win') {
        win++;

      } else if (result === 'u lose') {
        lose++;

      } else {
        tie++;
      }
    }
