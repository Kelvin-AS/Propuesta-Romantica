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

    let yesClicks = 0;

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
        const params = new URLSearchParams(window.location.search);
        const imageUrls = params.getAll('img');
        
        if (imageUrls.length === 0) {
            const defaultImages = [
                'https://via.placeholder.com/300x300.png?text=Foto+1',
                'https://via.placeholder.com/300x300.png?text=Foto+2',
                'https://via.placeholder.com/300x300.png?text=Foto+3'
            ];
            imageUrls.push(...defaultImages);
        }

        imageUrls.forEach(src => {
            const img = document.createElement('img');
            img.src = src;
            img.alt = 'Foto de nosotros';
            photoGallery.appendChild(img);
        });
    }

    function handleYesClick() {
        yesClicks++;
        if (yesClicks < 5) {
            moveYesButton();
        } else {
            showFinalScreen("¡Gracias a Dios que no dijiste que sí!", "No quiero entregar mi alma al diablo. 😅");
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
