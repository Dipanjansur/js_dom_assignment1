const input=document.getElementById("input");
const submit=document.getElementById("submit");
const img=document.getElementById("img");
const genQR=()=>{
img.style.display='inline';
console.log("clicked");
}
submit.addEventListener('click',genQR);