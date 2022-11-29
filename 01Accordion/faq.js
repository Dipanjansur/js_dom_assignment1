const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

const accordianBody=document.querySelector(".accordian_body");
createFaq();
showFaq();
const faqs = [];

function showFaq() {

}

function createFaq() {
for(let i of faqData){
  const newFaq=document.createElement("div")
  newFaq.classList.add("faq")
  newFaq.classList.add(`${i.id}`)


  const faq_header=document.createElement("div");
  faq_header.classList.add("faq_header");

  const question=document.createElement("h3")
  question.innerText=`${i.question}`

  const button=document.createElement("button");
  button.classList.add("show_btn");


  const answer= document.createElement("p");
  answer.innerText=`${i.answer}`
  answer.classList.add("hidden")


  faq_header.appendChild(question);
  faq_header.appendChild(button);
  newFaq.appendChild(faq_header);
  newFaq.appendChild(answer);
  accordianBody.appendChild(newFaq);
newFaq.addEventListener("click",()=>{
  answer.classList.remove("hidden");
  console.log("clicked");
}
)
}
}
  
function btnStatusUpdate() {
}

