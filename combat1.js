let enemyHealth = 5;
const feedback = document.getElementById("feedback");
const healthBarInner = document.getElementById("health-bar-inner");

const questions = [
    { 
        question: "The cat is ____ than the mouse.", 
        correct: "bigger", 
        options: ["bigger", "small", "smallest"] 
    },
    { 
        question: "A kitten is ____ than an adult cat.", 
        correct: "smaller", 
        options: ["smaller", "bigger", "biggest"] 
    },
    { 
        question: "The Persian cat is the ____ of all cats.", 
        correct: "fuzziest", 
        options: ["fuzziest", "fuzzy", "fuzzier"] 
    },
    { 
        question: "Tom is ____ than Jerry.", 
        correct: "faster", 
        options: ["slower", "fastest", "faster"] 
    },
    { 
        question: "The Maine Coon is the ____ cat.", 
        correct: "largest", 
        options: ["largest", "biggest", "bigger"] 
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

    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(option, currentQuestion.correct);
        choicesContainer.appendChild(button);
    });
}

// Verifica la respuesta del jugador
function checkAnswer(answer, correctAnswer) {
    if (answer === correctAnswer) {
        feedback.textContent = "Correct!";
        enemyHealth--;
        updateHealthBar();
    } else {
        feedback.textContent = "Try again!";
    }

    if (enemyHealth <= 0) {
        alert("You defeated the enemy! Moving to Level 2...");
        window.location.href = "level2.html"; // Redirige al siguiente nivel
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
