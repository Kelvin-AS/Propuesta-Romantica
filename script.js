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
    const imageUpload = document.getElementById('image-upload');

    let yesClicks = 0;

    document.getElementById('open-gift').addEventListener('click', () => {
        giftScreen.classList.add('hidden');
        photosScreen.classList.remove('hidden');
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

    imageUpload.addEventListener('change', handleImageUpload);

    function handleImageUpload(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const img = document.createElement('img');
                img.src = e.target.result;
                img.alt = 'Foto subida';
                photoGallery.appendChild(img);
            }
            reader.readAsDataURL(file);
        }
    }

    function handleYesClick() {
        yesClicks++;
        if (yesClicks < 50) {
            moveYesButton();
        } else {
            showFinalScreen("¡Eres fuerte!", "Diste y diste hasta que le diste que si. 😅");
        }
    }

    function handleNoClick() {
        showFinalScreen("¡Bicho no te quieres casar conmigo!", "Y yo queriendo casarme contigo. ");
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
        for (let i = 0; i < 20; i++) {
            const rose = document.createElement('div');
            rose.textContent = '🌹';
            rose.classList.add('rose');
            rose.style.left = `${Math.random() * 100}vw`;
            rose.style.animationDuration = `${Math.random() * 10 + 10}s`;
            rose.style.animationDelay = `${Math.random() * 10}s`;
            document.body.appendChild(rose);
            rose.style.animation = 'float linear infinite';
        }
    }
});
