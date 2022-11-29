const container=document.getElementsByClassName("container");
const error=document.getElementsByClassName("error");
const dob=document.getElementById("dob");
const element=document.getElementsByClassName("container");
const hello_btn=document.getElementsByClassName("hello_btn");
const years=document.getElementById("years");
const month=document.getElementById("months");
const date=document.getElementById("days");

window.addEventListener('click',getAge);

function getAge(){
const gotdate=new Date((dob.value));
if(true){
calcAge(gotdate);
}
}

function calcAge(gotdate){ 
const nowday=new Date();
const daydiff=Math.abs(nowday.getDate()-gotdate.getDate());
const monthdiff=Math.abs(nowday.getMonth()-gotdate.getMonth());
const yeardiff=Math.abs(nowday.getFullYear()-gotdate.getFullYear());
displayAge(daydiff,monthdiff,yeardiff);
}

function displayAge(daydiff,monthdiff,yeardiff){
    console.log(`${daydiff}-${monthdiff}-${yeardiff}`);
    years.innerText=yeardiff;
    month.innerText=monthdiff;
    date.innerText=daydiff;

}

