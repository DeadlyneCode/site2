document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('checkAnswers').addEventListener('click', () => {
        const answer1 = parseInt(document.getElementById('input1').value);
        const answer2 = parseInt(document.getElementById('input2').value);
        const answer3 = parseInt(document.getElementById('input3').value);
        const answer4 = parseInt(document.getElementById('input4').value);

        if (answer1 === 3 && answer2 === 5 && answer3 === 7 && answer4 === 9) { // Exemple de réponses correctes
            document.getElementById('result').style.display = 'block';
        } else {
            alert('Les réponses sont incorrectes. Réessayez.');
        }
    });

    document.getElementById('checkMorse').addEventListener('click', () => {
        const morseAnswer = document.getElementById('morseInput').value.trim();
        if (morseAnswer === 'yo soy luigi mamamia') { // La réponse correcte pour l'exemple de morse "... --- ..."
            window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'; // Lien vers la vidéo YouTube
        } else {
            alert('Réponse incorrecte. Réessayez.');
        }
    });
});
