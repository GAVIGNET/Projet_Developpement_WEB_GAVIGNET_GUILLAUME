const questions = [
  {
    question: "1. Quelle est la spécialité du baccalauréat ?",
    name: "q1",
    options: { a: "Histoire et Géographie", b: "Mathématiques et Physique", c: "SVT et Informatique" },
    correct: "b"
  },
  {
    question: "2. Dans quelle école est-il actuellement ?",
    name: "q2",
    options: { a: "Epitech", b: "42", c: "EPITA" },
    correct: "c"
  },
  {
    question: "3. Quelle est la langue maternelle ?",
    name: "q3",
    options: { a: "Mandarin", b: "Anglais", c: "Français" },
    correct: "c"
  },
  {
    question: "4. Quelle expérience militaire a-t-il eue ?",
    name: "q4",
    options: { a: "Préparation Militaire Terre", b: "Légion Étrangère", c: "Marine Nationale" },
    correct: "a"
  },
  {
    question: "5. Quelle est une de ses passions ?",
    name: "q5",
    options: { a: "La peinture", b: "La Voile", c: "Le piano" },
    correct: "b"
  }
];

let currentQuestionIndex = 0;
let score = 0;
let bruteForceEnCours = false;

const quizContainer = document.getElementById("quizContainer");
const resultatDiv = document.getElementById("resultat");
const validateBtn = document.getElementById("validateBtn");
const formulaireBtn = document.getElementById("formulaireBtn");
const restartBtn = document.getElementById("restartBtn");
const bruteForceBtn = document.getElementById("bruteForceBtn");
const stopBtn = document.getElementById("stopBtn");

function showQuestion(index) {
  const q = questions[index];
  quizContainer.innerHTML = `
    <p class="font-semibold">${q.question}</p>
    ${Object.entries(q.options).map(([key, value]) =>
      `<label class="block">
        <input type="radio" name="${q.name}" value="${key}" class="mr-2"> ${value}
      </label>`
    ).join("")}
  `;
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  formulaireBtn.classList.add("hidden");
  restartBtn.classList.add("hidden");
  resultatDiv.textContent = "";
  showQuestion(currentQuestionIndex);
}

validateBtn.onclick = () => {
  const currentQ = questions[currentQuestionIndex];
  const selected = document.querySelector(`input[name="${currentQ.name}"]:checked`);

  if (!selected) {
    resultatDiv.textContent = "Veuillez sélectionner une réponse.";
    resultatDiv.className = "mt-6 text-center text-red-600 font-semibold";
    return;
  }

  if (selected.value === currentQ.correct) {
    score++;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    showQuestion(currentQuestionIndex);
  } else {
    finishQuiz();
  }
};

function finishQuiz() {
  quizContainer.innerHTML = "";
  resultatDiv.classList.remove("text-red-600");
  if (score === questions.length) {
    resultatDiv.textContent = `Bravo ! Vous avez tout juste (${score}/${questions.length}).`;
    resultatDiv.classList.add("text-green-600");
    formulaireBtn.classList.remove("hidden");
  } else {
    resultatDiv.textContent = `Score : ${score}/${questions.length}. Vous devez recommencer.`;
    resultatDiv.classList.add("text-red-600");
    restartBtn.classList.remove("hidden");
  }
}

bruteForceBtn.onclick = () => {
  bruteForceEnCours = true;
  stopBtn.classList.remove("hidden");
  formulaireBtn.classList.add("hidden");
  restartQuiz();

  function tryNextOption(qIndex, optionIndex = 0) {
    if (!bruteForceEnCours || qIndex >= questions.length) {
      bruteForceEnCours = false;
      stopBtn.classList.add("hidden");
      finishQuiz();
      return;
    }

    const q = questions[qIndex];
    const options = Object.keys(q.options);

    if (optionIndex >= options.length) {
      console.log("Aucune réponse correcte trouvée.");
      bruteForceEnCours = false;
      stopBtn.classList.add("hidden");
      finishQuiz();
      return;
    }

    const val = options[optionIndex];
    showQuestion(qIndex);

    setTimeout(() => {
      const radio = document.querySelector(`input[name="${q.name}"][value="${val}"]`);
      if (radio) radio.checked = true;

      setTimeout(() => {
        if (val === q.correct) {
          score++;
          currentQuestionIndex++;
          tryNextOption(currentQuestionIndex, 0);
        } else {
          tryNextOption(qIndex, optionIndex + 1);
        }
      }, 300);
    }, 300);
  }

  tryNextOption(0, 0);
};

stopBtn.onclick = () => {
  bruteForceEnCours = false;
  stopBtn.classList.add("hidden");
};

window.onload = () => {
  showQuestion(currentQuestionIndex);
};
