let enemyHealth = 5;
const feedback = document.getElementById("feedback");
const healthBarInner = document.getElementById("health-bar-inner");

// Nuevas preguntas sobre el cheetah
const questions = [
    { 
        question: "The cheetah is ____ than the lion, but the tiger is the ____ of all big cats.", 
        correct: ["faster", "strongest"], 
        options: ["fast", "strongest", "stronger", "faster", "strong"] 
    },
    { 
        question: "A cheetah is ____ than a dog, but the greyhound is the ____ runner.", 
        correct: ["quicker", "fastest"], 
        options: ["slow", "fasting", "slower", "fastest", "quicker"] 
    },
    { 
        question: "The cheetah is the ____ animal on land, but the lion is the ____ of all animals.", 
        correct: ["fastest", "strongest"], 
        options: ["fastest", "faster", "fast", "strongest", "larger"] 
    },
    { 
        question: "Cheetahs are ____ than leopards, but they are not the ____ animals in the jungle.", 
        correct: ["lighter", "largest"], 
        options: ["light", "largest", "heavier", "lighter", "fastest"] 
    },
    { 
        question: "While a cheetah is ____ than a car, the jet is the ____ vehicle.", 
        correct: ["faster", "fastest"], 
        options: ["faster", "fastest", "slower", "quickest", "more powerful"] 
    }
];

let usedQuestions = [];

// Genera una nueva pregunta aleatoria
function generateQuestion() {
    if (usedQuestions.length === questions.length) usedQuestions = [];
    
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * questions.length);
    } while (usedQuestions.includes(randomIndex));
    
    usedQuestions.push(randomIndex);
    const currentQuestion = questions[randomIndex];

    document.getElementById("question").textContent = currentQuestion.question;
    const choicesContainer = document.getElementById("choices");
    choicesContainer.innerHTML = "";

    // Crea botones para seleccionar la primera y segunda respuesta
    const firstChoice = document.createElement("div");
    const secondChoice = document.createElement("div");

    firstChoice.innerHTML = "<strong>Select first answer:</strong>";
    secondChoice.innerHTML = "<strong>Select second answer:</strong>";

    currentQuestion.options.forEach(option => {
        const button1 = document.createElement("button");
        button1.textContent = option;
        button1.onclick = () => checkFirstAnswer(option, currentQuestion.correct[0], currentQuestion.correct[1]);
        firstChoice.appendChild(button1);
    });

    currentQuestion.options.forEach(option => {
        const button2 = document.createElement("button");
        button2.textContent = option;
        button2.onclick = () => checkSecondAnswer(option, currentQuestion.correct[1]);
        secondChoice.appendChild(button2);
    });

    choicesContainer.appendChild(firstChoice);
    choicesContainer.appendChild(secondChoice);
}

// Verifica la primera respuesta del jugador
function checkFirstAnswer(answer, correctAnswer1, correctAnswer2) {
    if (answer === correctAnswer1) {
        feedback.textContent = "First answer correct!";
    } else {
        feedback.textContent = "Try the first answer again!";
    }
}

// Verifica la segunda respuesta del jugador
function checkSecondAnswer(answer, correctAnswer2) {
    if (answer === correctAnswer2) {
        feedback.textContent = "Second answer correct!";
        enemyHealth--;
        updateHealthBar();
    } else {
        feedback.textContent = "Try the second answer again!";
    }

    if (enemyHealth <= 0) {
        alert("You defeated the enemy! Moving to Level 3...");
        window.location.href = "level3.html"; // Redirige al siguiente nivel
    } else if (enemyHealth > 0) {
        generateQuestion();
    }
}

// Actualiza la barra de vida visual
function updateHealthBar() {
    healthBarInner.style.width = `${(enemyHealth / 5) * 100}%`;
}

// Funciones para mostrar y cerrar la ayuda
function showHelp() {
    document.getElementById("help-modal").classList.remove("hidden");
}

function closeHelp() {
    document.getElementById("help-modal").classList.add("hidden");
}

// Inicializa la primera pregunta y la barra de vida
generateQuestion();
updateHealthBar();