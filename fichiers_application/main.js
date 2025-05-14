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