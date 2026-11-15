const backgroundAudio = document.getElementById('background-audio');

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