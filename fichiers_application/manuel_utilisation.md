# 📘 Manuel d'utilisation de l'application Web

Ce manuel vous guide à travers l'utilisation de l'application web incluse dans ce projet. L'application est autonome, fonctionne uniquement avec des fichiers HTML, CSS et JS, et utilise Tailwind CSS via CDN (aucune installation nécessaire).

---

## 📁 Structure du projet

- `index.html` : Page d'accueil, sert de point d'entrée
- `calculatrice.html` : Une calculatrice en ligne
- `me_contacter.html` : Page de QCM (quiz basé sur le CV)
- `form.html` : page contenant mes contacts
- `form_css.css` : Feuille de style personnalisée liée à `form.html`
- `main.js` : Script JavaScript pour les fonctionnalités interactives de me_contacter.js
- `input.css` : fichier css lié à index
- Images : `iss.jpg`, `jupiter.jpg`, `mercure.jpg`, `terre.jpg`, `nerd.jpg` (utilisées comme illustration)

---

## 🌐 Utilisation

1. **Ouvrir localement dans un navigateur** :
   - Double-cliquez sur `index.html`
   - Naviguez via les liens vers les pages :
     - `calculatrice.html` : pour effectuer des calculs
     - `me_contacter.html` : pour répondre au qcm
     - `form.html` : après avoir eu tout juste au qcm de me_contacter.html, un bouton apparaitra sur la page me_contacter.html

2. **Pas d’installation requise** :
   - Tailwind CSS est chargé via le CDN, comme ceci :
     ```html
     <script src="https://cdn.tailwindcss.com"></script>
     ```
   - Vous n’avez **pas besoin de compiler ou d’utiliser npm**

---

## 🎨 Personnalisation

- Les styles peuvent être modifiés directement dans les fichiers HTML en utilisant les classes Tailwind (`bg-blue-500`, `text-center`, etc.)
- `form_css.css` contient du CSS personnalisé pour les styles spécifiques à `form.html`

---

## 📸 Images

Les images sont probablement utilisées pour enrichir les pages ou illustrer des réponses dans le quiz :
- `iss.jpg` : Station spatiale
- `jupiter.jpg`, `mercure.jpg`, `terre.jpg` : Planètes
- `nerd.jpg` : Image humoristique ou illustrative

---

## 📬 Contact

Pour toute remarque ou contribution, vous pouvez utiliser la page `me_contacter.html` pour soumettre un message ou répondre au quiz.

---

