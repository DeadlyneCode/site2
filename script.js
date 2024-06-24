document.addEventListener('DOMContentLoaded', () => {
    const monologueText = [
        "Salut !",
        "Bah déjà, joyeux anniversaire ! Maintenant, tu es officiellemen The Papy Show.",
        "Alors, voici ton cadeau.",
        ". . .",
        "Bah quoi, tu te rends compte du temps que ça prend de faire un site ?",
        "Je sais que tu voulais des musiques, et j'ai quelque chose de spécial pour toi.",
        "Ooooooooooh, c'est mignon, non ?",
        "Mais attention, pour avoir ces musiques, il faudra que tu les mérites.",
        "Donc, je vais te faire travailler un petit peu.",
        "Toi,",
        "qui aime tant les ARG,",
        "j'ai préparé quelque chose d'unique pour toi.",
        "Pour découvrir ces musiques, tu devras résoudre des énigmes.",
        "Es-tu prêt ?",
        "Je suis sûr que tu y arriveras, et j'espere tu apprécieras chaque instant de cette expérience.",
        "Alors, bon courage, et encore une fois, joyeux anniversaire !"
    
    ];
    let currentTextIndex = 0;
    const monologueElement = document.getElementById('monologue-text');

    function displayNextText() {
        if (currentTextIndex < monologueText.length) {
            typeText(monologueText[currentTextIndex], 0);
        } else {
            document.getElementById('monologue').classList.remove('active');
            document.getElementById('menu').classList.add('active');
        }
    }

    function typeText(text, index) {
        if (index < text.length) {
            const span = document.createElement('span');
            span.innerHTML = text[index] === ' ' ? '&nbsp;' : text[index];
            span.style.animationDelay = `${index * 0.1}s`;
            monologueElement.appendChild(span);
            setTimeout(() => typeText(text, index + 1), 50);
        } else {
            currentTextIndex++;
        }
    }

    document.addEventListener('keydown', (event) => {
        if (event.code === 'Space') {
            monologueElement.innerHTML = '';  // Clear current text
            displayNextText();
        }
    });

    displayNextText();
});