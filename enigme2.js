document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('checkCode').addEventListener('click', () => {
        const code = document.getElementById('codeInput').value.trim();
        if (code === '589') { // Exemple de code correct
            window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'; // Lien vers la vidéo YouTube
            localStorage.setItem('enigme2', 'completed');
        } else {
            alert('Code incorrect. Réessayez.');
        }
    });
});
