let bubble = "";
let hitval = 0;
let timervalue = 60;
let scorevalue = 0;
let rnum = 0;
function hitvalue(){
    hitval = Math.floor(Math.random()*10);
    document.querySelector("#hit").textContent = hitval;
}
function timerval(){
    let timer = setInterval(function(){
        if(timervalue>0){
            timervalue--;
            document.getElementById("timer").textContent=timervalue;
        }
        else{
            clearInterval(timer);
            document.querySelector(".pbottom").innerHTML = "";
        }
    }, 1000);
}
function bubbles(){
    for(var i=1; i<=172; ++i){
        rnum = Math.floor(Math.random()*10);
        bubble += `<div class="bubble">${rnum}</div>`;
        document.querySelector(".pbottom").innerHTML = bubble;
    }
}
function increaseScore(){
    scorevalue += 10;
    document.querySelector("#score").textContent = scorevalue;
}

function startgame(){
    bubbles();
    hitvalue();
    timerval();
    document.querySelector(".pbottom").addEventListener("click", function (dets){
        var clickedNumber = Number(dets.target.textContent);
        if(hitval === clickedNumber){
            increaseScore();
            hitvalue();
            bubbles();
        }
        else{
            scorevalue -= 20;
            document.querySelector("#score").textContent = scorevalue;
        }
    })
}
document.querySelector(".btn").addEventListener("click", function(){
    document.getElementById("start").style.opacity=0;
    startgame();
})

