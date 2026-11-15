const backgroundAudio = document.getElementById('background-audio');
const fishVideo = document.getElementById('fish-video');

if (fishVideo) {
    fishVideo.addEventListener('ended', () => {
        fishVideo.classList.remove('reiniciar-animacion');
        void fishVideo.offsetWidth;
        fishVideo.classList.add('reiniciar-animacion');
        fishVideo.currentTime = 0;
        fishVideo.play().catch(() => {
            // El video permanece detenido si el navegador bloquea su reproduccion.
        });
    });
}

if (backgroundAudio) {
    const startAudio = () => {
        backgroundAudio.play().catch(() => {
            // El navegador esperara una interaccion del usuario para permitir sonido.
        });
    };

    startAudio();

    const enableAudioAfterInteraction = () => {
        startAudio();
        window.removeEventListener('pointerdown', enableAudioAfterInteraction);
        window.removeEventListener('keydown', enableAudioAfterInteraction);
    };

    window.addEventListener('pointerdown', enableAudioAfterInteraction, { once: true });
    window.addEventListener('keydown', enableAudioAfterInteraction, { once: true });
}