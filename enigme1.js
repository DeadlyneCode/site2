document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('checkAnswers').addEventListener('click', () => {
        const answer1 = parseInt(document.getElementById('input1').value);
        const answer2 = parseInt(document.getElementById('input2').value);
        const answer3 = parseInt(document.getElementById('input3').value);
        const answer4 = parseInt(document.getElementById('input4').value);

        if (answer1 === 5 && answer2 === 9 && answer3 === 5) { // Exemple de réponses correctes
            document.getElementById('result').style.display = 'block';
        } else {
            alert('Les réponses sont incorrectes. Réessayez.');
        }
    });

    document.getElementById('checkMorse').addEventListener('click', () => {
        const morseAnswer = document.getElementById('morseInput').value.trim();
        if (morseAnswer === 'yo soy luigi mamamia') { // La réponse correcte pour l'exemple de morse "... --- ..."
            window.location.href = 'https://youtu.be/hs1JOozX5U8'; // Lien vers la vidéo YouTube
            localStorage.setItem('enigme1', 'completed');
        } else {
            alert('Réponse incorrecte. Réessayez.');
        }
    });
});
