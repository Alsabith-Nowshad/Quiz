
const quizQuestions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Rome"],
    correctAnswer: "Paris"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Mars"
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Cu", "Fe"],
    correctAnswer: "Au"
  }
];

let currentQuestionIndex = 0;

let quiz = document.querySelector(".Quiz")
let btn = document.querySelector("button")
let h2 = document.querySelector("h2")
let h3 = document.querySelector("h3")
let opt1 = document.querySelector(".opt1")
let opt2 = document.querySelector(".opt2")
let opt3 = document.querySelector(".opt3")
let opt4 = document.querySelector(".opt4")
let ansSelector = "";
let score = 0;
let h5;
let h4;
function AnswerFunction (){
if(quizQuestions.length > currentQuestionIndex){
  btn.innerText = "Next"
  h2.textContent = quizQuestions[currentQuestionIndex].question
  opt1.textContent = quizQuestions[currentQuestionIndex].options[0]
  opt2.textContent = quizQuestions[currentQuestionIndex].options[1]
  opt3.textContent = quizQuestions[currentQuestionIndex].options[2]
  opt4.textContent = quizQuestions[currentQuestionIndex].options[3]

}else{
  btn.innerText = "Reset"
  h2.textContent = ""
  opt1.textContent = ""
  opt2.textContent = ""
  opt3.textContent = ""
  opt4.textContent = ""
  let h4 = document.createElement("h4")
   h4.innerHTML = "Quiz Ended"
  quiz.appendChild(h4)
  h5 = document.createElement("h5")
  h5.innerHTML = "Score is " + score
 quiz.appendChild(h5)
}
}

btn.addEventListener("click",function(){
  AnswerFunction()
    h3.innerText = ""
    if(btn.innerHTML == "Reset"){
      currentQuestionIndex = 0;
    }else{

    }
})

function ansFinder(realAns){
  if(realAns == quizQuestions[currentQuestionIndex].correctAnswer){
    h3.innerText = "Answer is  Correct"
    score++
  }else{
    h3.innerText = "Answer is  Wrong"
  }
}


opt1.addEventListener("click",function(){
  ansFinder(opt1.innerText)
  currentQuestionIndex++
})
opt2.addEventListener("click",function(){
  ansFinder(opt2.innerText)
  currentQuestionIndex++
})

opt3.addEventListener("click",function(){
  ansFinder(opt3.innerText)
  currentQuestionIndex++
})

opt4.addEventListener("click",function(){
  ansFinder(opt4.innerText)
  currentQuestionIndex++
})
