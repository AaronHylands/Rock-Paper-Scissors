// global variables for game
var choices = ['rock', 'paper', 'scissors'];
var computers_choice = choices[Math.floor(Math.random() * choices.length)];
var player_choice;
var player_lives = 3;
var computer_lives = 3;
var message_area = document.getElementById('game_area');
var clearArea = false;

document
  .getElementById('playGame')
  .addEventListener('click', runGame);

function choice_rock(){
  message_area.innerHTML = '';
  player_choice = 'rock';
  message_area.innerHTML += 'You choose rock. <br />';
}

function choice_paper(){
  message_area.innerHTML = '';
  player_choice = 'paper'
  message_area.innerHTML += 'You choose paper. <br />';
}

function choice_scissors(){
  message_area.innerHTML = '';
  player_choice = 'scissors'
  message_area.innerHTML += 'You choose scissors. <br />';
}


function runGame() {
  if (clearArea=true) {
    message_area.innerHTML = '';
  }

  clearArea = false;



  /*var player_choice = document.getElementByName('player_selection');
  player_choice = document.querySelector('input[name="player_selection"]:checked').value;
  computers_choice = choices[Math.floor(Math.random() * choices.length)];*/

  message_area.innerHTML += '==================== <br />';
  message_area.innerHTML += 'Computer chose: ' + computers_choice + '<br />';
  message_area.innerHTML += 'Player chose: ' + player_choice + '<br />';
  message_area.innerHTML += '==================== <br />';

  if (player_choice == computers_choice) {
    message_area.innerHTML += 'Tie! No one wins, play again.';
  } else if (player_choice == 'rock') {
    checkComputerWins('paper', 'covers', 'smashes');
  } else if (player_choice == 'paper') {
    checkComputerWins('scissors', 'cuts', 'covers');
  } else if (player_choice == 'scissors') {
    checkComputerWins('rock', 'smashes', 'cuts');
  } else {
    message_area.innerHTML += "Well that's not a valid choice<br />";
  }

  checkStatus();

  message_area.innerHTML += 'Computer lives: ' + computer_lives + '<br />';
  message_area.innerHTML += 'Player lives: ' + player_lives + '<br />';
  message_area.innerHTML += '====================<br />';
}

function checkComputerWins(validateChoice, winMessage, loseMessage) {
  if (computers_choice == validateChoice) {
    message_area.innerHTML += 'You lose! ' + computers_choice + ' ' + winMessage + ' ' + player_choice + '<br />';
    player_lives = player_lives - 1;
  } else {
    message_area.innerHTML += 'You win! ' + player_choice + ' ' + loseMessage + ' ' + computers_choice + '<br />';
    computer_lives = computer_lives - 1;
  }
}


function checkStatus() {
  if (player_lives == 0) {
    showWinLoseMessage("lost");
  } else if (computer_lives == 0) {
    showWinLoseMessage("won");
  } else {
    message_area.innerHTML += 'Select another choice!<br />';
    message_area.innerHTML += '==================== <br />'
  }
}

function showWinLoseMessage(status) {
  message_area.innerHTML +='==================== <br />';
  message_area.innerHTML +='Game over.<br />';
  message_area.innerHTML +='==================== <br />';
  message_area.innerHTML +='You ' + status + '! Would you like to play again? <br />';
  clearArea = true;
}

