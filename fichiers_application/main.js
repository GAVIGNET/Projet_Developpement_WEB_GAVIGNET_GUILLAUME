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

    function bruteForceAuto() {
    const questions = ['q1', 'q2', 'q3', 'q4', 'q5'];
    const options = ['a', 'b', 'c'];
    let totalCombinaisons = Math.pow(options.length, questions.length);
    let current = Array(questions.length).fill(0);

    function setAnswers(indexes) {
      indexes.forEach((optIndex, i) => {
        const q = questions[i];
        const val = options[optIndex];
        const input = document.querySelector(`input[name="${q}"][value="${val}"]`);
        if (input) input.checked = true;
      });
    }

    function increment(indexes) {
      for (let i = indexes.length - 1; i >= 0; i--) {
        if (indexes[i] < options.length - 1) {
          indexes[i]++;
          return true;
        } else {
          indexes[i] = 0;
        }
      }
      return false; // terminé
    }

    let essais = 0;

    function tryNextCombination() {
      if (essais >= totalCombinaisons) {
        console.log("Aucune bonne combinaison trouvée.");
        return;
      }

      setAnswers(current);
      corriger();

      const resultat = document.getElementById("resultat").textContent;
      if (resultat.includes("Bravo")) {
        console.log("Bonne combinaison trouvée :", current.map(i => options[i]).join(", "));
        return;
      }

      essais++;
      if (increment(current)) {
        setTimeout(tryNextCombination, 50); // évite de bloquer le navigateur
      }
    }

    tryNextCombination();
  }