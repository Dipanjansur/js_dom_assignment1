const enternumber=document.querySelector(".naming_conversion input");
const convertbutton=document.querySelector("#convert-btn");
const CamelCase=document.querySelector("#camel-case");
const PascalCase=document.querySelector("#pascal-case");
const SnakeCase=document.querySelector("snake-case");
const Screaming_Snake_Case=document.querySelector("screaming-snake-case");
const KababCase=document.querySelector("kebab-case");
const Screaming_Kabab_Case=document.querySelector("screaming-kebab-case");
let text;
let otherplace=[];
CamelCasefun=()=>{ 
    
}
updateinput=(event)=>{
    if (event.key === "Enter") {

    };

}
enternumber.addEventListener("keypress",updateinput);
convertbutton.addEventListener("click",updateinput);

