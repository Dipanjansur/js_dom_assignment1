const button=document.getElementById("button");
const canvas=document.getElementById("canvas");
const color=["#FF6263","#383CC1","#120E43","#6EC72D","#F4CE6A","#8D3DAF","#242B2E","#1FAA59"]
let index=0;
const changecolor=()=>{
canvas.style.backgroundColor=color[index];
if(index==color.length-1){
index=0;
}else{
index++;
}
console.log(index);
}
button.addEventListener("click",changecolor);