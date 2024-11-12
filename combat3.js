let enemyHealth = 10; // Salud del enemigo aumentada
const feedback = document.getElementById("feedback");
const healthBarInner = document.getElementById("health-bar-inner");

// Frases sobre el león
const questions = [
    { 
        question: "The lion is ____ than the tiger, but the cheetah is the ____ hunter.", 
        correct: ["stronger", "fastest"], 
        options: ["strongest", "fastest", "largest", "stronger", "quickest"] 
    },
    { 
        question: "A lion is ____ than a leopard, but the tiger is the ____ of the big cats.", 
        correct: ["heavier", "largest"], 
        options: ["heavy", "larger", "stronger", "largest", "heavier"] 
    },
    { 
        question: "Lions are ____ than most other big cats, but the elephant is the ____ land animal.", 
        correct: ["bigger", "largest"], 
        options: ["largest", "larger", "bigger", "stronger", "fastest"] 
    },
    { 
        question: "The lion's roar is ____ than that of the tiger, but the blue whale has the ____ call.", 
        correct: ["louder", "loudest"], 
        options: ["loudier", "loudest", "quieter", "louder", "strongest"] 
    },
    { 
        question: "While a lion is ____ than a dog, the wolf is the ____ of all canines.", 
        correct: ["larger", "largest"], 
        options: ["largest", "larger", "strongest", "quickest", "fastest"] 
    },
    { 
        question: "The lion is the ____ of the savannah, while the cheetah is the ____ sprinter.",
        correct: ["king", "fastest"], 
        options: ["king", "faster", "largest", "strongest", "fastest"] 
    },
    { 
        question: "A lioness is ____ than a male lion, but the lion is the ____ male.",
        correct: ["smaller", "strongest"], 
        options: ["small", "strong", "strongest", "fast", "smaller"] 
    },
    { 
        question: "Lions are ____ hunters than solitary leopards, but cheetahs are the ____ in short bursts.",
        correct: ["better", "fastest"], 
        options: ["better", "faster", "gooder", "fastest", "fiercer"] 
    },
    { 
        question: "The lion is ____ than the tiger, making it the ____ of big cats.",
        correct: ["bigger", "most recognizable"], 
        options: ["thicker", "more recognizable", "bigger", "largest", "most recognizable"] 
    },
    { 
        question: "While a lion is ____ than a house cat, it is not the ____ in the animal kingdom.",
        correct: ["larger", "largest"], 
        options: ["larger", "largest", "stronger", "quickest", "fastest"] 
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
        alert("You defeated the enemy! Congratulations, you completed the game!");
        // Puedes redirigir a otra página o reiniciar el juego aquí
    } else if (enemyHealth > 0) {
        generateQuestion();
    }
}

// Actualiza la barra de vida visual
function updateHealthBar() {
    healthBarInner.style.width = `${(enemyHealth / 10) * 100}%`; // Cambia a 10 puntos de salud
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

// ... Código anterior ...

function checkSecondAnswer(answer, correctAnswer2) {
    if (answer === correctAnswer2) {
        feedback.textContent = "Second answer correct!";
        enemyHealth--;
        updateHealthBar();
    } else {
        feedback.textContent = "Try the second answer again!";
    }

    if (enemyHealth <= 0) {
        // Redirige a la página de felicitaciones
        window.location.href = "congratulations.html"; // Cambia "congratulations.html" si el nombre es diferente
    } else if (enemyHealth > 0) {
        generateQuestion();
    }
}

// ... Código posterior ...