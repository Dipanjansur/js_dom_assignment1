const quizData = [
    {
        question: "Which built-in method calls a function for each element in the array?",
        a: "while()",
        b: "loop()",
        c: "forEach()",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "Which built-in method reverses the order of the elements of an array?",
        a: "changeOrder(order)",
        b: "reverse()",
        c: "sort(order)",
        d: "None of the above",
        correct: "b",
    },
    {
        question: "Which of the following is a valid type of function javascript supports?",
        a: "named function",
        b: "anonymous function",
        c: "Both the above",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

const quizt=document.getElementById("quiz");;
//const answerEls=
const questionEl=document.getElementById("question");
const a_text=document.getElementById("a");
const b_text=document.getElementById("b");
const c_text=t=document.getElementById("c");
const d_text=document.getElementById("d");

const a_text_label=document.getElementById("a_text");
const b_text_label=document.getElementById("b_text");
const c_text_label=document.getElementById("c_text");
const d_text_label=document.getElementById("d_text");

const submitBtn=document.getElementById("submit");


let currentQuiz = 0
let score;
let asnwer=0;

loadQuiz()

function loadQuiz() {
    questionEl.innerText=((quizData[currentQuiz]).question);
    a_text_label.innerText=((quizData[currentQuiz]).a);
    b_text_label.innerText=((quizData[currentQuiz]).b);
    c_text_label.innerText=((quizData[currentQuiz]).c);
    d_text_label.innerText=((quizData[currentQuiz]).d);
    deSelected();
}

a_text.addEventListener('click',()=>{
if(a_text.checked==true){
score="a";
}else{
score=0;
}
});

b_text.addEventListener('click',()=>{
        if(b_text.checked==true){
        score="b";
        }

    });

c_text.addEventListener('click',()=>{
            if(c_text.checked==false){
            score="c";
            }

    });
d_text.addEventListener('click',()=>{
        if(d_text.checked==false){
        score="d";
        }
        });
function deSelected(){
    a_text.checked=false;
    b_text.checked=false;
    c_text.checked=false;
    d_text.checked=false;
    score=0;

}
function updateScore(){
correctAnswer=(quizData[currentQuiz]).correct;
if(score==correctAnswer){
    asnwer++;
    console.log(asnwer);
}
}
submitBtn.addEventListener('click', () => {
    if(currentQuiz<quizData.length){
    currentQuiz++;
    }else{
        currentQuiz=0;
    }
    updateScore();
    loadQuiz();
    

    
})