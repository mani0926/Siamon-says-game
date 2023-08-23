let gameSeq = [];
let userSeq = [];

let btns = ["yellow" , "green" , "red" , "blue"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");
document.addEventListener("keypress" , function(){
    if(started == false) {
      console.log("game is started");
      started = true;
      levelUp();
    }
});

function gameFlash(btn){
  btn.classList.add("flash");
  setTimeout (function () {
    btn.classList.remove("flash");
  } , 250); 
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout (function () {
      btn.classList.remove("userflash");
    } , 250); 
  }

function levelUp() {
    userSeq = [];
level++;
h2.innerText = `level ${level}`;

let ranIdx = Math.floor(Math.random () * 3);
let ranColor = btns[ranIdx];
let randbtn = document.querySelector(`.${ranColor}`);
gameSeq.push(ranColor);
console.log(gameSeq);
gameFlash(randbtn);
}

function checkAns(idx){  
if(userSeq[idx] === gameSeq[idx]){
  if(userSeq.length == gameSeq.length) {
    setTimeout(levelUp , 1000);
  }
}
else{
    h2.innerHTML = `Game Over! Your score  was <b> ${level} </b> <br> Press any key to start.👎🏻`;
    document.querySelector("body").style.backgroundColor = "yellow";
    setTimeout(function(){
     document.querySelector("body").style.backgroundColor = "white"; 
    } , 200);
    reset();
 }
}

function btnPress () {
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);
}


let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns) {
    btn.addEventListener("click" , btnPress);
}

function reset (){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}