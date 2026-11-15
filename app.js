const backgroundAudio = document.getElementById('background-audio');

if (backgroundAudio) {
    const startAudio = () => {
        backgroundAudio.load();
        backgroundAudio.play().catch((error) => {
            console.warn('El navegador bloqueo el autoplay con sonido:', error);
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