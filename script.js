var timer=30;
var score=0;
let startbtn=document.querySelector("#p-start button");
let strpanel= document.querySelector("#p-start");
startbtn.addEventListener("click",(e)=>{
    console.log(e.target)
    strpanel.style.zIndex="-1";
    setTimeout(()=>{
        startGame();
        document.querySelector("#p-bottom").addEventListener("click",(e)=>{
            // console.log(+e.target.innerText)
            if(+(document.getElementById("hit").innerText)===(+e.target.innerText)){
                incScore();
                makeBubble();
                getNewHit();
            }
            else{
                e.target.style.backgroundColor="red";
                setTimeout(()=>{
                e.target.style.backgroundColor=" rgb(201, 244, 201)";
                },400)
            }
        })
    },700)
    
})
function startGame(){
    getNewHit();
    makeBubble();
    runTime();
}
function incScore(){
    score+=10;
    document.getElementById("score").innerText=score;
}
function makeBubble(){
    let clutter="";

for(let i=1;i<=102;i++){
    let rn= Math.floor(Math.random()*20)+1;
    clutter+=`<div class="bubble">${rn}</div>`;
}

document.querySelector("#p-bottom").innerHTML=clutter;
}
function runTime(){
    var timeint= setInterval(() => {
       if(timer){
        timer--;
        document.getElementById("time").innerText=timer;
       }
       else{
        clearInterval(timeint);
        document.querySelector("#p-bottom").innerHTML=`<div class="middle" ><h1>Game Over 😀<h1> <h2> Final Score: ${score}</h2></div>`;
       }
    }, 1000);
}
function getNewHit(){
    var newHit= Math.floor(Math.random()*10)+1;
    document.getElementById("hit").innerText=newHit;
    return newHit;
}



// for crsr
let crsr= document.querySelector(".crsr");
document.querySelector("#main").addEventListener("mousemove",(dets)=>{
    crsr.style.left=`${dets.clientX}px`;
    crsr.style.top=`${dets.clientY}px`;
})