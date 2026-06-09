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
    },
    {
        question: "What is the full form of DOM in js?",
        options: [
            "data object manipulation", 
            "document object model", 
            "document oriented manipulation", 
            "date of original model"
        ],
        correctAnswer: 1
    },
    {
        question: "what is the full form of DSA",
        options: [
            "Date of structure and analysis", 
            "Data structures and analysis", 
            "Data structure and Algorithm", 
            "Date of structures and alogrithm"
        ],
        correctAnswer: 2
    }
];

let currentQuestionIndex = 0;
let score = 0;
const questionElement = document.getElementById("question");
const optionsList = document.getElementById("options-list");
const quizHeader = document.getElementById("quiz-header");
const scoreContainer = document.getElementById("score-container");
const scoreText = document.getElementById("score-text");

function loadQuestion() {
    
    optionsList.innerHTML = ""; // Clears the previous options
    const currentQuestion = quizData[currentQuestionIndex]; // Gets the current question object
    questionElement.innerText = currentQuestion.question; // Updates the question text
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.innerText = option;
        button.classList.add("option-btn");
        button.addEventListener("click", function() {
            checkAnswer(index);});
        const li = document.createElement("li");
        li.appendChild(button);
        optionsList.appendChild(li);
    });
}

function checkAnswer(selectedIndex) {
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

function showScore() {
    quizHeader.classList.add("hidden");
    optionsList.classList.add("hidden");
    scoreContainer.classList.remove("hidden");
    scoreText.innerText = `You scored ${score} out of ${quizData.length}!`;
}
loadQuestion();