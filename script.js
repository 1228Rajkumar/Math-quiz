const GETNAMEOFTHEPLAYER = document.getElementById('player-name');
const QUESTIONBOX = document.getElementById('questionarea');
const OPTIONPAGE = document.getElementById('secondpage');
const LEVELPAGE = document.getElementById('levels');
const GAMEPAGE = document.getElementById('gamepage');
const ANSWERVALUE = document.getElementById('ans');
const NUMBEROFQUES = document.getElementById('ques');
const SCOREBOARD = document.getElementById('score');
const SHOWCORRECT = document.getElementById('correctanswer');
const SHOWWRONG = document.getElementById('wronganswer');
const SUGGESANSWER = document.getElementById('originalans');
const OPTION1 = document.getElementById("a");
const SCOREVALUE = document.getElementById('mark');
const PLAYERNAME = document.getElementById('player');
const SCOREPAGE = document.getElementById('scorepage');
let lowvalue;
let upvalue;
let number1;
let number2;
let symbole;
let operationicon;
let score = 0;
let count = 1;
let roundans;
let ans;
// second-page show and hide
function showsecondpage() {
  hidecorretsugges();
  hidescorepage();
  hidegame();
  hidelevel();
  count = 1;
  score = 0;
  OPTIONPAGE.style.left = "0";
  NUMBEROFQUES.innerText = '0';
  // OPTIONPAGE.style.translate ="(0%)"
}
function hidesecondpage() {
  OPTIONPAGE.style.left = "100%";
}

// third-page show and hide
function showlevel() {
  LEVELPAGE.style.left = "0%";
}
function hidelevel() {
  LEVELPAGE.style.left = "100%";
}

// fourth-page show and hide
function showgame() {
  GAMEPAGE.style.left = "0%";
  SCOREBOARD.innerText = "0";
}
function hidegame() {
  GAMEPAGE.style.left = "100%";
}
// correct suggestion show and hide
function showcorretsugges() {
  SHOWCORRECT.style.top = "20%";
}
function hidecorretsugges() {
  SHOWCORRECT.style.top = "-20%";
}

// wrong suggestion show and hide
function showwrongsugges() {
  SHOWWRONG.style.display = "block";
}
function hidewrongsugges() {
  SHOWWRONG.style.display = "none";

}
// score-page show and hide
function showscorepage() {
  SCOREPAGE.style.top = "0%";
}
function hidescorepage() {
  SCOREPAGE.style.top = "100%";
}

function RandomNumber(lowvalue, upvalue) {
  return Math.round(Math.random() * (upvalue - lowvalue)) + lowvalue;
}

function Randomoperatorgenerate() {
  let refno = RandomNumber(0, 3);
  let operator;
  if (refno === 0) {
    operator = "+"
  } else if (refno === 1) {
    operator = "-"
  }
  else if (refno === 2) {
    operator = "*"
  }
  else if (refno === 3) {
    operator = "/"
  }
  return operator;
}

function operatorgenerate(opsname) {
  if (opsname === "add") {
    symbole = "+"
  }
  else if (opsname === "dif") {
    symbole = "-"
  }
  else if (opsname === "multi") {
    symbole = "*"
  }
  else if (opsname === "div") {
    symbole = "/"
  }
  else if (opsname === "mixture") {
    symbole = Randomoperatorgenerate();
  }
  showlevel();
  return symbole;
}

function Setvalue(value) {
  if (value == 'easy') {
    lowvalue = 1;
    upvalue = 10;
  }
  else if (value == 'medi') {
    lowvalue = 20;
    upvalue = 40;
  }
  else if (value == 'hard') {
    lowvalue = 40;
    upvalue = 60;
  }
  showgame();
  Questiongenerate();
}

function Questiongenerate() {
  number1 = RandomNumber(lowvalue, upvalue);
  number2 = RandomNumber(lowvalue, upvalue);
  operationicon = operatorgenerate();
  QUESTIONBOX.innerText = `${number1}${operationicon}${number2}=`
  findanswer();
}

function findanswer() {
  ans;
  if (operationicon == "+") {
    ans = number1 + number2;
  }
  else if (operationicon == "-") {
    ans = number1 - number2;
  }
  else if (operationicon == "*") {
    ans = number1 * number2;
  }
  else if (operationicon == "/") {
    ans = number1 / number2;
  }
  roundans = Math.round(ans);
}

function validate() {
  if (roundans == ANSWERVALUE.value && count < 10) {
    score += 1;
    showcorretsugges();
    Questiongenerate();
    count += 1;
    ANSWERVALUE.value = "";
    NUMBEROFQUES.innerText = count;
    SCOREBOARD.innerText = score;
  }
  else if (count < 10) {
    SUGGESANSWER.innerText = `${number1}${symbole}${number2}=${roundans}`;
    showwrongsugges();
    Questiongenerate();
    count += 1;
    NUMBEROFQUES.innerText = count;
    ANSWERVALUE.value = "";
  }
  else {
    scoreboard();
  }
}
function scoreboard() {
  PLAYERNAME.innerText = GETNAMEOFTHEPLAYER.value;
  SCOREVALUE.innerText = SCOREBOARD.innerText;
  showscorepage();
}

function reload() {
  window.location.reload();
}



