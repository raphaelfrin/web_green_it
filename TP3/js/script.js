console.log("Je suis la console !");
function verif() {
  const champs = [
    "nom",
    "Prenom",
    "date_de_naissace",
    "Adresse_mail",
    "select",
  ];
  var valid = true;
  champs.forEach((champId) => {
    const champ = document.getElementById(champId);
    if (champ.value === "") {
      valid = false;
    }
  });
  if (valid === true) {
    quizAlert();
  } else {
    alert("tout les champs doivent etre remplit");
  }
}

function quizAlert() {
  alert("Vous êtes sur le point de commencer le quiz !");
  quizConfirm();
}

function champfix() {
  const champs = [
    "nom",
    "Prenom",
    "date_de_naissace",
    "Adresse_mail",
    "select",
  ];
  champs.forEach((champId) => {
    const champ = document.getElementById(champId);
    champ.disabled = true;
  });
}

function quizConfirm() {
  var res = confirm("Etes-vous sûr de vouloir continuer ?");
  if (res == true) {
    document.getElementsByClassName("butt")[0].style.display = "none";
    champfix();
    alert("Le quiz va commencer dans 5 secondes !");
    //ajouter un décompte de 5 secondes
    var timer = 5;
    //Créer un élément p pour afficher le message
    var confirmation = document.createElement("p");
    confirmation.textContent = timer + " secondes";
    //style du message
    confirmation.style.color = "red";
    confirmation.style.fontSize = "1.5em";
    confirmation.style.fontWeight = "bold";
    confirmation.style.textAlign = "center";
    //ajouter le message à la pagie à la suite du bouton d'id start
    var start = document.getElementById("informations");
    start.appendChild(confirmation);
    //en utilisant la fonction setInterval qui s'exécute toutes les secondes
    var interval = setInterval(function () {
      //décrémenter le décompte
      timer--;
      //On l’affiche également dans la console
      console.log(timer);
      //afficher le décompte dans l’élément p créé
      confirmation.textContent = timer + " secondes";
      //si le décompte est terminé
      //afficher le message "C'est parti ! Bonne chance !"
      //afficher le formulaire
      //afficher le bouton de soumission
      if (timer == 0) {
        clearInterval(interval);
        confirmation.textContent = "C'est parti ! Bonne chance !";
        document.querySelectorAll(".quiz").forEach((quiz) => {
          quiz.style.display = "table";
        });
      }
    }, 1000);
  } else {
    alert("Vous allez être redirigé vers la page d'accueil !");
    window.location.href = "accueil.html";
  }
}

function SubmitQuiz() {
  var score = 0;
  if (document.getElementById("une_pratique").checked) {
    score += 4;
  }
  if (document.getElementById("reduir").checked) {
    score += 3;
  }
  if (document.getElementById("minimiser").checked) {
    score += 3;
  }
  if (document.getElementById("optimiser").checked) {
    score -= 3;
  }
  const inputText = document.getElementById("exemple").value;
  const motsCles = [
    "réduire",
    "alléger",
    "faciliter",
    "optimiser",
    "exploiter",
  ];
  for (let i = 0; i < motsCles.length; i++) {
    if (inputText.toLowerCase().includes(motsCles[i])) {
      score += 10;
      break;
    }
  }
  document.getElementById("tableau_score").style.display = "table";

  const tableau = document
    .getElementById("tableau_score")
    .querySelector("tbody");
  const essais = tableau.rows.length + 1;
  const ligne = `
        <tr class="essais">
            <td>${essais}</td>
            <td>${score}</td>
        </tr>`;
  tableau.insertAdjacentHTML("beforeend", ligne);
  if (essais == 3) {
    const button = document.getElementById("send");
    button.disabled = true
  }
  reset();
}

function reset() {
    const radios = document.getElementsByName("choix");
    radios.forEach(radio => {
        radio.checked = false;
    });

    const checkboxes = document.getElementsByName("chec");
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });

    const textareas = document.getElementsByName("exemple");
    textareas.forEach(textarea => {
        textarea.value = "";
    });
}
