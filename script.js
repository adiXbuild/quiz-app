const quizData = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language", 
            "Home Tool Markup Language", 
            "Hyperlinks and Text Markup Language", 
            "Hyper Tool Multi Language"
        ],
        correctAnswer: 0 
    },
    {
        question: "Which of the following is used to style a webpage?",
        options: ["HTML", "CSS", "JavaScript", "Python"],
        correctAnswer: 1
    },
    {
        question: "What is the correct syntax to output 'Hello World' in JavaScript?",
        options: [
            "print('Hello World');", 
            "console.log('Hello World');", 
            "echo('Hello World');", 
            "document.write('Hello World');"
        ],
        correctAnswer: 1
    }
];

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 15;
let timerInterval;
const questionElement = document.getElementById("question");
const optionsList = document.getElementById("options-list");
const quizHeader = document.getElementById("quiz-header");
const scoreContainer = document.getElementById("score-container");
const scoreText = document.getElementById("score-text");
const timerElement = document.getElementById("timer");

function loadQuestion() {
    optionsList.innerHTML = "";
    
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.innerText = option;
        button.classList.add("option-btn");
        
        button.addEventListener("click", function() {
            checkAnswer(index);
        });
        
        const li = document.createElement("li");
        li.appendChild(button);
        optionsList.appendChild(li);
    });
    startTimer();
}

function checkAnswer(selectedIndex) {
    clearInterval(timerInterval);

    const correctIndex = quizData[currentQuestionIndex].correctAnswer;
    
    if (selectedIndex === correctIndex) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showScore();
    }
}

function startTimer() {
    timeLeft = 15;
    timerElement.innerText = `Time: ${timeLeft}s`;

    clearInterval(timerInterval);

    timerInterval = setInterval(() => {
        timeLeft--;
        timerElement.innerText = `Time: ${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval); 
            currentQuestionIndex++;
            if (currentQuestionIndex < quizData.length) {
                loadQuestion();
            } else {
                showScore();
            }
        }
    }, 1000);
}

function showScore() {
    clearInterval(timerInterval);

    quizHeader.classList.add("hidden");
    optionsList.classList.add("hidden");
    
    scoreContainer.classList.remove("hidden");
    scoreText.innerText = `You scored ${score} out of ${quizData.length}!`;
}
loadQuestion();