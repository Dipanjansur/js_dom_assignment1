const userscore=document.getElementById("userScoreVal");
const computerScore=document.getElementById("compScoreVal");
const getrock=document.getElementById("r");
const getpaper=document.getElementById("p");
const getsci=document.getElementById("s");
const player_choice_res=document.getElementById("result-user-stat");
const computer_choice_res=document.getElementById("result-comp-stat");
const winner_res=document.getElementById("result-final-stat");

let player_score=0;
let computer_score=0;
const comp=["rock","paper","scissors"];
 let comp_choice;
function playgame(player_choice){
    comp_choice=comp[Math.round(Math.random()*2)];
    player_choice_res.innerText=`User:${player_choice}`;
    computer_choice_res.innerText=`Computer:${comp_choice}`;
    game_logic(player_choice,comp_choice);
}
function game_logic(player_choice,comp_choice){
if(player_choice=='rock' && comp_choice=='scissors'||player_choice=='paper' && comp_choice=='rock'||player_choice=='scissors' && comp_choice=='paper'){
updatescore('p');
}else{
updatescore('c');
}
}

function updatescore(won_player){
if(won_player=='p'){
player_score++;
userscore.innerText=player_score;
}else if(won_player=='c'){
computer_score++;
computerScore.innerText=computer_score;
}
}
getrock.addEventListener("click",()=>{playgame('rock')});
getpaper.addEventListener("click",()=>{playgame('paper')});
getsci.addEventListener("click",()=>{playgame('scissors')});
