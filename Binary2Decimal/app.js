const binary=document.getElementById("binary");
const result=document.getElementsByClassName("result");
const btn=document.querySelector(".btnss");
const convertnumber=(text)=>{
    console.log(text);
}
btn.addEventListener('click',convertnumber(binary.innerText));


