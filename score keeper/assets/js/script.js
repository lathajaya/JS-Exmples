var player1 = document.getElementById("p1");
var player2 = document.getElementById("p2");
var resetBtn = document.getElementById("reset");
var numInput = document.querySelector("input");
var display = document.getElementById("scoreDisplay");
var p1score = 0;
var p2score = 0;
var gameOver = false;
var winnningScore = 5;

player1.addEventListener("click", function(){
    if(!gameOver){
        p1score++;
        if(p1score === winnningScore){
            score1.classList.add("winner");
            gameOver = true;
        }
        score1.textContent = p1score;
    }
})

player2.addEventListener("click", function(){
    if(!gameOver){
        p2score++
        if(p2score === winnningScore){
            score2.classList.add("winner");
            gameOver = true;
        }
        score2.textContent = p2score;
    }
})

resetBtn.addEventListener("click", function(){
 reset();
})

function reset(){
    p1score = 0;
    p2score = 0;
    score1.textContent = 0;
    score2.textContent = 0;
    gameOver = false;
    score1.classList.remove("winner");
    score2.classList.remove("winner");
}

numInput.addEventListener("change", function(){
    display.textContent = this.value;
    winnningScore = Number(this.value);
    reset();
})