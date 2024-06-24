document.addEventListener('DOMContentLoaded', () => {
    const imageAndText = document.getElementById('imageAndText');
    const section = document.querySelector('.section');

    document.getElementById('checkCode').addEventListener('click', () => {
        const code = document.getElementById('codeInput').value.trim();
        if (code === '5798') { // Exemple de code correct
            // Afficher l'image et masquer le formulaire
            imageAndText.style.display = 'block';
            section.style.display = 'none';
        } else {
            alert('Code incorrect. Réessayez.');
        }
    });
});
