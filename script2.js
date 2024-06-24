// Récupérez l'élément du texte défilant
var scrollingText = document.getElementById("scrolling-text");

// Fonction pour démarrer le texte défilant
function startScrolling() {
    var credits = [
        "Crédit 1",
        "Crédit 2",
        "Crédit 3",
        // Ajoutez d'autres crédits ici selon vos besoins
    ];

    var index = 0;
    setInterval(function() {
        scrollingText.innerHTML = "<ul><li>" + credits[index] + "</li></ul>";
        index++;
        if (index === credits.length) {
            index = 0;
        }
    }, 3000); // Temps d'attente entre chaque crédit (en millisecondes)
}

// Démarrer le défilement automatique lors du chargement de la page
window.onload = function() {
    startScrolling();
};
