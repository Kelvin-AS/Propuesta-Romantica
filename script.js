const images = [
    'imagenes/Imagen de WhatsApp 2024-10-10 a las 17.33.51_54fa401f.jpg',
    'imagenes/Imagen de WhatsApp 2.jpg',
    'imagenes/Imagen de WhatsApp 3.jpg'
];

let yesClicks = 0;

document.addEventListener('DOMContentLoaded', () => {
    const giftScreen = document.getElementById('gift-screen');
    const photosScreen = document.getElementById('photos-screen');
    const questionScreen = document.getElementById('question-screen');
    const proposalScreen = document.getElementById('proposal-screen');
    const finalScreen = document.getElementById('final-screen');
    const photoGallery = document.getElementById('photo-gallery');
    const yesButton = document.getElementById('yes-button');
    const noButton = document.getElementById('no-button');
    const finalMessage = document.getElementById('final-message');
    const finalText = document.getElementById('final-text');

    document.getElementById('open-gift').addEventListener('click', () => {
        giftScreen.classList.add('hidden');
        photosScreen.classList.remove('hidden');
        loadPhotos();
    });

    document.getElementById('continue-button').addEventListener('click', () => {
        photosScreen.classList.add('hidden');
        questionScreen.classList.remove('hidden');
    });

    document.getElementById('ask-question').addEventListener('click', () => {
        questionScreen.classList.add('hidden');
        proposalScreen.classList.remove('hidden');
        createFloatingRoses();
    });

    yesButton.addEventListener('click', handleYesClick);
    noButton.addEventListener('click', handleNoClick);

    function loadPhotos() {
        images.forEach(src => {
            const img = document.createElement('img');
            img.src = src;
            img.alt = 'imagenes/Imagen de WhatsApp 2024-10-10 a las 17.33.51_54fa401f.jpg';
            photoGallery.appendChild(img);
        });
    }

    function handleYesClick() {
        yesClicks++;
        if (yesClicks < 50) {
            moveYesButton();
        } else {
            showFinalScreen("¡Gracias a Dios que no dijiste que sí!", "No quiero entregar mi alma al diablo. TE AMOOOO😅");
        }
    }

    function handleNoClick() {
        showFinalScreen("¡Gracias a Dios que dijiste que no!", "No quiero entregar mi alma al diablo. 😅");
    }

    function moveYesButton() {
        const maxX = window.innerWidth - yesButton.offsetWidth;
        const maxY = window.innerHeight - yesButton.offsetHeight;
        const newX = Math.random() * maxX;
        const newY = Math.random() * maxY;
        yesButton.style.position = 'fixed';
        yesButton.style.left = `${newX}px`;
        yesButton.style.top = `${newY}px`;
    }

    function showFinalScreen(message, text) {
        proposalScreen.classList.add('hidden');
        finalScreen.classList.remove('hidden');
        finalMessage.textContent = message;
        finalText.textContent = text;
    }

    function createFloatingRoses() {
        for (let i = 0; i < 40; i++) {
            const rose = document.createElement('div');
            rose.textContent = '🌹';
            rose.classList.add('rose');
            rose.style.left = `${Math.random() * 400}vw`;
            rose.style.animationDuration = `${Math.random() * 20 + 20}s`;
            rose.style.animationDelay = `${Math.random() * 20}s`;
            document.body.appendChild(rose);
            rose.style.animation = 'float linear infinite';
        }
    }
});