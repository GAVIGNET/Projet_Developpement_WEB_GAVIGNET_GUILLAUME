let bruteForceEnCours = false;

function corriger() {
  const reponses = {
    q1: "b",
    q2: "c",
    q3: "c",
    q4: "a",
    q5: "b"
  };

  let erreurs = [];

  for (let [q, bonneRep] of Object.entries(reponses)) {
    const rep = document.querySelector(`input[name="${q}"]:checked`);
    if (!rep || rep.value !== bonneRep) {
      erreurs.push(q.slice(1));
    }
  }

  const resultatDiv = document.getElementById("resultat");
  const formulaireBtn = document.getElementById("formulaireBtn");

  if (erreurs.length === 0) {
    resultatDiv.textContent = "Bravo ! Toutes les réponses sont correctes.";
    resultatDiv.classList.remove("text-red-600");
    resultatDiv.classList.add("text-green-600");
    formulaireBtn.classList.remove("hidden");
  } else {
    resultatDiv.textContent = "La réponse " + erreurs.join(", ") + " est incorrecte. Veuillez réessayer.";
    resultatDiv.classList.remove("text-green-600");
    resultatDiv.classList.add("text-red-600");
    formulaireBtn.classList.add("hidden");
  }
}

function bruteForceIntelligent() {
  const questions = ['q1', 'q2', 'q3', 'q4', 'q5'];
  const options = ['a', 'b', 'c'];
  let index = 0;
  let reponsesTrouvees = {};
  bruteForceEnCours = true;

  document.getElementById("stopBtn").classList.remove("hidden");

  function tryOption(qIndex, optionIndex) {
    if (!bruteForceEnCours) {
      console.log("BruteForce intelligent arrêté.");
      document.getElementById("stopBtn").classList.add("hidden");
      return;
    }

    const q = questions[qIndex];
    const val = options[optionIndex];

    // Appliquer toutes les réponses déjà trouvées
    for (let [qq, rep] of Object.entries(reponsesTrouvees)) {
      const input = document.querySelector(`input[name="${qq}"][value="${rep}"]`);
      if (input) input.checked = true;
    }

    // Tester la réponse actuelle
    const input = document.querySelector(`input[name="${q}"][value="${val}"]`);
    if (input) input.checked = true;

    corriger();

    const resultat = document.getElementById("resultat").textContent;
    if (!resultat.includes(qIndex + 1)) {
      // Réponse correcte
      reponsesTrouvees[q] = val;
      index++;
      if (index >= questions.length) {
        console.log("Toutes les bonnes réponses ont été trouvées.");
        bruteForceEnCours = false;
        document.getElementById("stopBtn").classList.add("hidden");
        return;
      }
      setTimeout(() => tryOption(index, 0), 100);
    } else {
      // Essayer option suivante
      if (optionIndex < options.length - 1) {
        setTimeout(() => tryOption(qIndex, optionIndex + 1), 100);
      } else {
        console.log("Impossible de trouver une bonne réponse pour", q);
        bruteForceEnCours = false;
        document.getElementById("stopBtn").classList.add("hidden");
      }
    }
  }

  tryOption(index, 0);
}

function stopBruteForce() {
  bruteForceEnCours = false;
}