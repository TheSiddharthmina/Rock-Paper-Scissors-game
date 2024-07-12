let score = 0;
let playerBet;
let houseBet;
let test;
let housetest;
let message = "";

const paper = document.createElement("div");
paper.classList.add("betBtn");
paper.classList.add("paper");
paper.classList.add("paper::before");
const scissors = document.createElement("div");
scissors.classList.add("betBtn");
scissors.classList.add("scissors");
scissors.classList.add("scissors::before");
const rock = document.createElement("div");
rock.classList.add("betBtn");
rock.classList.add("rock");
rock.classList.add("rock::before");
const paperh = document.createElement("div");
paperh.classList.add("betBtn");
paperh.classList.add("paper");
paperh.classList.add("paper::before");
const scissorsh = document.createElement("div");
scissorsh.classList.add("betBtn");
scissorsh.classList.add("scissors");
scissorsh.classList.add("scissors::before");
const rockh = document.createElement("div");
rockh.classList.add("betBtn");
rockh.classList.add("rock");
rockh.classList.add("rock::before");


document.getElementById("resultTab").style.display = 'none';

function playBet(evt, bet) {
  playerBet = parseInt(document.getElementById(bet).value);


  document.getElementById("betTab").style.display = "none";
  document.getElementById("resultTab").style.display = "grid";
  resultTab.classList.add("tabcontent");
  document.getElementById("betArea");
  betArea.classList.add("betButtons");

  if (playerBet == 0) {
    test = document.getElementById("myBetPlace").appendChild(paper);
  }
  else if (playerBet == 1) {
    test = document.getElementById("myBetPlace").appendChild(rock);
  }
  else {
    test = document.getElementById("myBetPlace").appendChild(scissors);
  };
  document.getElementById("houseBetPlace").innerHTML = "3";
  setTimeout(firstDigit, 1000);
  function firstDigit(){
    document.getElementById("houseBetPlace").innerHTML = "";
    document.getElementById("houseBetPlace").innerHTML = "2";
  }
  setTimeout(secondDigit, 2000);
  function secondDigit(){
    document.getElementById("houseBetPlace").innerHTML = "";
    document.getElementById("houseBetPlace").innerHTML = "1";
  }
  setTimeout(() =>
  {
    rndNum()
  }, 3000)
};

function rndNum() {
  myRndNum = Math.floor(Math.random() * 3);
  houseBet = myRndNum;
  document.getElementById("houseBetPlace").innerHTML = "";


if (houseBet == 0) {

  housetest = document.getElementById("houseBetPlace").appendChild(paperh);
}
else if (houseBet == 1) {

  housetest = document.getElementById("houseBetPlace").appendChild(rockh);
}
else {

  housetest = document.getElementById("houseBetPlace").appendChild(scissorsh);
};
 compaire(playerBet, houseBet);
}


function compaire(num, num) {
  if (playerBet == houseBet) {
    message = document.getElementById("result").innerHTML = "Ground";
  }
  else if ((playerBet - houseBet) == -1 || (playerBet - houseBet) == 2) {
    message = document.getElementById("result").innerHTML = "you win";
    score = score + 1;
  }
  else {
    message = document.getElementById("result").innerHTML = "you loose";
    score = score - 1;
  }
}

function replay() {
  document.getElementById("myBetPlace").removeChild(test);
  document.getElementById("result").innerHTML = "";
  document.getElementById("houseBetPlace").removeChild(housetest);

  document.getElementById("resultTab").style.display = "none";
  document.getElementById("betTab").style.display = "grid";
  betTab.classList.add("tabContent");
  document.getElementById("scoreNum").innerHTML = score;
}
document.addEventListener('DOMContentLoaded', function() {
  var messageBox = document.getElementById('messageBox');
  var myButton = document.getElementById('rulesBtn');
  var closeButton = document.getElementById('closeButton');

  myButton.addEventListener('click', function() {
      messageBox.classList.remove('hidden');
      messageBox.classList.add('visible');
  });

  closeButton.addEventListener('click', function() {
      messageBox.classList.remove('visible');
      messageBox.classList.add('hidden');
  });
});




