const joke=document.getElementById("joke");
const jokeBtn=document.getElementById("jokeBtn");
const url="https://api.chucknorris.io/jokes/random";
function hello(){
fetch(url)
.then((responce)=>
responce.json())
.then((data)=>{
    joke.innerText=(data.value);
}).catch(()=>{
    console.error("something went wrong");
})
};
  jokeBtn.addEventListener("click",hello);
  