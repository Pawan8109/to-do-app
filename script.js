<<<<<<< HEAD
const questions = [
    {
        question: "which is largest animal in the world?",
        answers: [
            {
                text: "shark",
                correct: false
            },
            {
                text: "blue whale",
                correct: true
            },
            {
                text: "elephant",
                correct: false
            },
            {
                text: "giraffe",
                correct: false
            }
        ]
    },
    {
        question: "which is smallest country in the world?",
        answers: [
            {
                text: "vatican city",
                correct: true
            },
            {
                text: "burundi",
                correct: false
            },
            {
                text: "brazil",
                correct: false
            },
            {
                text: "london",
                correct: false
            }
        ]
    },
    {
        question: "which is smallest continent in the world?",
        answers: [
            {
                text: "africa",
                correct: false
            },
            {
                text: "australia",
                correct: true
            },
            {
                text: "asia",
                correct: false
            },
            {
                text: "america",
                correct: false
            }
        ]
    },
    {
        question: "which is largest desert in the world?",
        answers: [
            {
                text: "sahara",
                correct: false
            },
            {
                text: "chaand",
                correct: false
            },
            {
                text: "registan",
                correct: false
            },
            {
                text: "antarcatica",
                correct: true
            }
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer=>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);

        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    })
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    const ans_span = document.createElement("span");
    ans_span.classList.add("correctAns");
    selectedBtn.appendChild(ans_span);

    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
        ans_span.innerHTML = "correct!!";
        
    }
    else{
        selectedBtn.classList.add("incorrect");
        ans_span.innerHTML = "incorrect!!";
    }

    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
           
            
        }
        
        button.disabled = true;

    });
    nextButton.style.display = "block";
    
}

function showScore(){
    resetState();
    questionElement.innerHTML = `you scored ${score} out of ${questions.length}`;
    nextButton.innerHTML = "play again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();
=======
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
   if(inputBox.value == ''){
    alert("you must write something");
   }
   else{
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
   }
   inputBox.value = '';
   saveData();
}

inputBox.value = '';

listContainer.addEventListener("click", (e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
});

saveData = ()=>{
    localStorage.setItem("data", listContainer.innerHTML);
}

showTask = ()=>{
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();


>>>>>>> c265f38 (adding code for to do list web app)
