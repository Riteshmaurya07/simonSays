let gameSeq=[];
let userSeq=[];
let h2=document.querySelector("h2");

let started=false;
let level=0;
let btns=["yellow","red", "purple", "green"];

document.addEventListener("keypress",function(){
   if(started==false){
    console.log("game is started");
    started=true;
    levelup();
   } 

});



function gameFlash(btn){
   btn.classList.add("flash");
   setTimeout(function(){
      btn.classList.remove("flash");
   },250);
}

function userFlash(btn){
   btn.classList.add("userFlash");
   setTimeout(function(){
      btn.classList.remove("userFlash");
   },250);
}

function levelup(){
   userSeq=[];
   level++;
   h2.innerText=`Level ${level}`;

   let randIdx=Math.floor(Math.random()*3);
   let randColor=btns[randIdx];
   let randBtn=document.querySelector(`.${randColor}`);
   gameSeq.push(randColor);
   console.log(gameSeq);
   gameFlash(randBtn);
}

function checkAns(idx){
   //console.log("curr level:",level);
  // let idx=level- 1;

   if(userSeq[idx]==gameSeq[idx]){
      if(userSeq.length==gameSeq.length){
         //levelup();
         setTimeout(levelup,1000);
      }
   }else{
     h2.innerHTML=`game over! Your score was <b>${level}</b> press any  key to start.`;
     document.querySelector("body").style.backgroundColor="red";
     setTimeout(function(){
      document.querySelector("body").style.backgroundColor="white";
     },150);
     reset();

   }
}

function btnPress(){
   console.log("btn was pressed");
   let btn=this;
   userFlash(btn);

   let useColor=btn.getAttribute("id");
   userSeq.push(useColor);

   checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(let btn of allBtns){
   btn.addEventListener("click",btnPress);
}

function reset(){
   started=false;
   gameSeq=[];
   userSeq=[];
   level=0;
}
